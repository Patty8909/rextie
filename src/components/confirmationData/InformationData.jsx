import React from 'react';
import { connect } from 'react-redux';
import ModalBankAccount from './ModalBankAccount';

const InformationData = ({navigateTo}) => (
  <div>
    <h3 className="text-center">
      Confirmación de Datos
    </h3>
    <div className="container-fluid">
      <div>
        <div className="row justify-content-center">
          <div className="col-6 col-md-1 border">Tipo de operación</div>
          <div className="col-6 col-md-1 border">Cliente ENVÍA</div>
          <div className="col-6 col-md-1 border">Cliente RECIBIRÁ</div>
          <div className="col-6 col-md-1 border">Tipo de Cambio</div>
          <div className="w-100 d-none d-md-block"></div>
          <div className="col-6 col-md-1 border">COMPRA</div>
          <div className="col-6 col-md-1 border">1000.00 Dólares</div>
          <div className="col-6 col-md-1 border">3246.00 Soles</div>
          <div className="col-6 col-md-1 border">3.2460</div>
        </div>
      </div>
      <br/>
      <div className="row justify-content-center">
        <div>
          <p>
            ¿Deseas registrar una cuenta bancaria en este momento?
            <a className="btn btn-primary" href="" role="button" data-toggle="modal" data-target="#exampleModal" onClick={() => navigateTo('modalbankaccount')}>
              <i className="fas fa-plus"></i>
            </a>
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
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option2" autoComplete="off"/> Cambiar la cantidad
            </label>
      <label className="btn btn-secondary active">
        <a className="btn btn-back" onClick={() => navigateTo('alloperations')}>Cambiar Operación</a>
        <a className="btn btn-success" onClick={() => navigateTo('maintransfer')}>Aceptar</a> 
      </label>
      
    </div>
        </form>
    </div>
    </div>
  </div>
)

export default connect()(InformationData);