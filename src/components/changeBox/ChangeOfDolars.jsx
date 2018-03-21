import React from 'react';
import Messages from './Messages';
import ChangeOperation from './ChangeOperation';
import './change.css'

const ChangeOfDolars = () => (
  <div>
        <div className="container">
  <div class="row justify-content-md-center">
    <h5>¿Cu&aacute;nto quieres cambiar?</h5>
    </div>
    <div className="row justify-content-md-center">
    <h2>Cambio de D&oacute;lares Online</h2>
    </div>
    <div className="row justify-content-md-center">
    <h3>Seguro, Rápido y al Mejor Precio</h3>
    </div>
    </div>
    <ChangeOperation/>
    <Messages/>
  </div>
);

export default ChangeOfDolars;