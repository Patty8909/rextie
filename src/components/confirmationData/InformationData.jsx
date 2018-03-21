import React from 'react'

const InformationData = () => (
  <div>
    <h3>
      Confirmación de Datos
    </h3>

    <div>
      <p>
        ¿Deseas registrar una cuenta bancaria en este momento?
      </p>
      <a className="btn btn-primary" href="#" role="button">
        <span className="oi oi-plus"></span>
      </a>
    </div>
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
            <div className="input-group-text">@</div>
          </div>
          <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="cel"/>
        </div>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" htmlFor="exampleCheck1">Aceptar Términos y Condiciones y Política de Privacidad</label>
      </div>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-secondary">
    <input type="radio" name="options" id="option2" autoComplete="off"/> Cambiar la cantidad
  </label>
  <label className="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked/> Aceptar
  </label>
  
</div>
    </form>

  </div>
)

export default InformationData