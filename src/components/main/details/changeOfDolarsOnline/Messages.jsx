import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const Messages = () => (
  <div>
    <div className="">
      <div className="justify-content-md-center">
        <h3>
        <strong>Ahorra&nbsp;
          <span></span>&nbsp;respecto al banco
        </strong>
        </h3>
      </div>
      <div className="justify-content-md-center">
        <h5>Tipo de cambio vigente hasta</h5>
      </div>
      <div className="justify-content-md-center">
        <a className="btn btn-sucess" role="button"><i className="fal fa-usd-circle"></i></a>
        <Link to="/informationdata" className="button btn btn-outline-sucess">Continuar</Link>
      </div>
    </div>
  </div>
);

export default connect()(Messages);