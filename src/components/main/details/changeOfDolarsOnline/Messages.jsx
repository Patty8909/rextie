import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

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
    <a className="btn btn-sucess" role="button"><i className="fal fa-usd-circle"></i></a>
    <Link to="/informationdata" className="button btn btn-outline-sucess">Continuar</Link>
    </div>
  
  </div>
);

export default connect()(Messages);