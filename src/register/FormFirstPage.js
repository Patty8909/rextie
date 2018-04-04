import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './Validate';
import renderField from './Render';
import 'bootstrap/dist/css/bootstrap.min.css';


const FormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <div className="container">
      <div className="row justify-content-center">
    <div className="col-12 text-center">
    <form onSubmit={handleSubmit}>
    <Field name="email" type="email" component={renderField} label="Correo Electrónico" />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Crea una contraseña"
      />
      <div>
        <label className="form-check-label" htmlFor="termsAndConditions">Aceptar Términos y Condiciones y Política de Privacidad</label>
        <div>
          <Field
            name="termsAndConditions"
            id="termsAndConditions"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <button type="submit" className="next btn btn-primary">Regístrate</button>
      </div>
    </form>
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
})(FormFirstPage);
