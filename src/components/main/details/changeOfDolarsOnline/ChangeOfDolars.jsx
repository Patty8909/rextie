import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import ChangeOperation from './ChangeOperation';
import './change.css'

const ChangeOfDolars = () => (

    <div className="col-md-8">
        <div className="text-center">
          <h5>¿Cu&aacute;nto quieres cambiar?</h5>
        </div>
        <div className="text-center">
          <h2>Cambio de D&oacute;lares Online</h2>
        </div>
        <div className="text-center">
          <h3>Seguro, Rápido y al Mejor Precio</h3>
        </div>
        <ChangeOperation/>
        <Messages/>
    </div>
   
);

export default connect()(ChangeOfDolars);