import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ModalBankAccount from './ModalBankAccount';

const InformationData = () => (
  <div>
    <h3 className="text-center">
      Confirmación de Datos
    </h3>
    <div className="">
      <div>
        <div className="">
          <table>
   <tr>
       <td>Tipo de operación</td>
       <td>Cliente ENVÍA</td>
       <td>Cliente RECIBIRÁ</td>
       <td>Tipo de Cambio</td>
   </tr>
   <tr>
       <td>COMPRA</td>
       <td>1000.00 Dólares</td>
       <td>3246.00 Soles</td>
       <td>3.2460</td>
   </tr>
</table>
        </div>
      </div>
      <br/>
      <div className="row justify-content-center">
        <div>
          <p>
            ¿Deseas registrar una cuenta bancaria en este momento?
            <Link to='bankaccount' className="button btn btn-primary" role="button" data-toggle="modal" data-target="#exampleModal">
              <i className="fas fa-plus"></i>
            </Link>
          </p>     
        </div>
      </div>
      <div className="row justify-content-center">
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Cuenta Bancaria Origen</label>
            <select className="form-control">
              <option>Seleccione</option>
              <option>1</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Cuenta Bancaria Destino</label>
            <select className="form-control">
              <option>Seleccione</option>
              <option>1</option>
            </select>
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Celular</label>
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text"><i className="fas fa-phone"></i></div>
              </div>
              <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="cel"/>
            </div>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Aceptar Términos y Condiciones y Política de Privacidad</label>
          </div>
          <div className="btn-group btn-group-toggle justify-content-center" data-toggle="buttons">
            <Link to='/' className="button btn btn-secondary">
              <input type="radio" name="options" id="option2" autoComplete="off"/> Cambiar la cantidad
            </Link>
      <label className="btn btn-secondary active">
        <Link to='/transferyour' className="btn btn-success button">Aceptar</Link>
      </label>
      
    </div>
        </form>
    </div>
    </div>
  </div>
)

export default connect()(InformationData);