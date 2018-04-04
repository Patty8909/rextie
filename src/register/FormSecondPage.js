import React from 'react';
import { Field, reduxForm, formValueSelector  } from 'redux-form';
import validate from './Validate';
import renderField from './Render';
import 'bootstrap/dist/css/bootstrap.min.css';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const FormSecondPage = props => {
  const { handleSubmit, previousPage, nextPage} = props;
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <form onSubmit={handleSubmit}>
    
            <div>
              <div>
                <Field name="idDocument" component="select" className="custom-select my-1 mr-sm-2">
                  <option/>
                  <option value="dni">DNI</option>
                  <option value="ce">CE</option>
                </Field>
              </div>
            </div>
            <Field name="documentNumber" type="number" component={renderField} label="Número de documento" />
            <Field name="phoneNumber" type="number" component={renderField} label="Número de celular" />
            <div>
              <label>Ocupación</label>
              <div>
                <Field name="ocupation" component="select" className="custom-select my-1 mr-sm-2">
                  <option />
                  <option value="estudiante">Estudiante</option>
                  <option value="empleado">Empleado(a)</option>
                  <option value="ama de casa">Ama de casa</option>
                </Field>
              </div>
            </div>
            <div>
              <p>
                ¿Deseas registrar una cuenta bancaria en este momento?
                <a className="btn btn-primary ml-4" href="" role="button" data-toggle="modal" data-target="#modalBankAccount">
                  <i className="fas fa-plus"></i>
                </a>
              </p>     
            </div>
            <div>
              <button type="button" className="previous btn-prev p-2 m-2" onClick={previousPage}>
                Anterior
              </button>
              <button type="submit" className="next btn btn-next p-2 m-2">Regístrate</button>
              <button type="button" className="next btn btn-next p-2 m-2" onClick={nextPage}>Siguiente</button>
            </div>
          </form>
        <div className="modal fade" id="modalBankAccount" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">   
              <h5 className="modal-title">Añadir Cuenta Bancaria de persona</h5>               
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <select className="form-control">
                  <option selected>Seleccione una tipo de cuenta</option>
                    <option>Propia</option>
                    <option>Terceros</option>
                  </select>
                </div>
                <div className="form-group">
                  <select className="form-control">
                    <option selected>Seleccione un banco</option>
                    <option>Interbank</option>
                    <option>BBVA Continental</option>
                    <option>Scotiabank</option>
                  </select>
                </div>
                <div className="form-group">
                  <select className="form-control">
                    <option selected>Seleccione Tipo de Cuenta</option>
                    <option>Ahorro</option>
                    <option>Corriente</option>
                  </select>
                </div>
                <div className="form-group">
                  <select className="form-control">
                    <option selected>Seleccione una Moneda</option>
                    <option>Soles</option>
                    <option>D&oacute;lares</option>
                  </select>
                </div>
              <div className="form-group">
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Número de Cuenta"/>
              </div>
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary">Añadir</button>            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(FormSecondPage);
