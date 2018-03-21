import React from 'react'
import TransferYourOnlineBank from './transferYourOnlineBank'
import RextieTransferToClient from './RextieTransferToClient'
import './mainTransfer.css'

const MainTransfer = () => (
   <div>
     <div className="container">
       <div className="row">
       <div class="col-md-4 offset-md-4">
       Tu operación con código <b>N° 8608</b> ha sido registrada con éxito el día <b>23/02 a las 23:00</b> horas. Deberás realizar la transferencia en un máximo de 15 minutos para mantener el tipo de cambio acordado. Debes realizar sólo dos pasos para culminar tu operación.
       </div>
       </div>
     </div>
     <p>
    </p>
    <TransferYourOnlineBank/>
    <RextieTransferToClient/>
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-secondary">
        <input type="radio" name="options" id="option2" autoComplete="off"/> Ir a Página Principal
      </label>
      <label className="btn btn-secondary active">
        <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked/> Nueva Operación
      </label>
    </div>
     </div>
)

export default MainTransfer