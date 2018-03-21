import React from 'react'

const ModalBankAccount = () => (
  <div>
    <div className="modal" tabindex="-1" role="dialog">
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
                <option>Propia</option>
                <option>1</option>
              </select>
            </div>
            <div className="form-group">
              <select className="form-control">
                <option>Seleccione un banco</option>
                <option>1</option>
              </select>
            </div>
            <div className="form-group">
              <select className="form-control">
                <option>Seleccione Tipo de Cuenta</option>
                <option>1</option>
              </select>
            </div>
            <div className="form-group">
              <select className="form-control">
                <option>Seleccione una Moneda</option>
                <option>1</option>
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
)

export default ModalBankAccount