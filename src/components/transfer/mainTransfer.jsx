import React from 'react'
import TransferYourOnlineBank from './transferYourOnlineBank'
import RextieTransferToClient from './RextieTransferToClient'
import { connect } from 'react-redux';
import './MainTransfer.css'

const MainTransfer = ({navigateTo}) => (
   <div>
     <div className="container">
       <div className="row">
       <div className="col-md-4 offset-md-4">
       Tu operación con código <b>N° 8608</b> ha sido registrada con éxito el día <b>23/02 a las 23:00</b> horas. Deberás realizar la transferencia en un máximo de 15 minutos para mantener el tipo de cambio acordado. Debes realizar sólo dos pasos para culminar tu operación.
       </div>
       </div>
     </div>
     <p>
    </p>
    <TransferYourOnlineBank/>
    <RextieTransferToClient/>
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <a className="btn btn-success" onClick={() => navigateTo('alloperations')}>Ir a la P&aacute;gina Principal</a>
      <a className="btn btn-success" onClick={() => navigateTo('changeofdolars')}>Nueva operaci&iacute;</a>
    </div>
     </div>
)

export default connect()(MainTransfer);