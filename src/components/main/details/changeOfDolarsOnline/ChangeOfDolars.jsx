import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import ChangeOperation from './ChangeOperation';

import './change.css'

const ChangeOfDolars = () => (

        <div className="col-md-8">
        
        <div className="text-center line-height">
          <h2>Nueva Operación</h2>
        </div>
        <div className="line-height">
          <button className="btn btn-primary col-md-2 offset-md-3" type="submit">Venta 3.217</button>
          <button className="btn btn-primary col-md-2 offset-md-3" type="submit">Compra 3.237</button>
        </div>
        
        <ChangeOperation/>
        <Messages/>
    </div>
   
);

export default connect()(ChangeOfDolars); 
