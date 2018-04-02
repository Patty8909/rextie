import React from 'react';
import Messages from './Messages';
import ChangeOperation from './ChangeOperation';
import './change.css'

const ChangeOfDolars = () => (
  <div className="col-md-8 mt-5">
    <div className="container">
    {/* row justify-content-md-center
row justify-content-md-center
row justify-content-md-center */}
        <div className="text-center">
          <h5>¿Cu&aacute;nto quieres cambiar?</h5>
        </div>
        <div className="text-center">
          <h2>Cambio de D&oacute;lares Online</h2>
        </div>
        <div className="text-center">
          <h3>Seguro, Rápido y al Mejor Precio</h3>
        </div>
    </div>
    <ChangeOperation/>
    <Messages/>
  </div>
);

export default ChangeOfDolars;