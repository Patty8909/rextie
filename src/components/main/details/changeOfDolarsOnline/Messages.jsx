import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './change.css';

const Messages = () => (
  <div>
  <div className="text-center line-height">
    <h3>
      <strong>Ahorra&nbsp; S/.20.19
        <span></span>&nbsp;respecto al banco
      </strong>
    </h3>
    </div>
  <div className="text-center line-height">
    <h5>Tipo de cambio vigente hasta</h5>
    </div>
  <div className="text-center">
    <a role="button"><i className="fal fa-usd-circle"></i></a>
    <Link to="/informationdata" type="button" className="btn btn-sucess">Continuar</Link>
    </div>
  
  </div>
);

export default connect()(Messages);