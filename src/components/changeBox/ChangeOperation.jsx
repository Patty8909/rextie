import React from 'react';
import Messages from './Messages';

const ChangeOperation = () => (
  <div>
    <div className="card border-info mb-3" style={{'max-width': '18rem'}}>
      <div className="card-body text-info">
        <h3>Compra: 
          <span></span>
          &nbsp;-&nbsp;Venta: <span></span>
        </h3>
      </div>
    </div>
    
    <div className="container">
      <div className="col-sm-6">
        <form className="dropdown-menu p-4">
          <div className="form-group">
            <label for="exampleDropdownFormEmail2">Email address</label>
            <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
          </div>
          <div className="form-group">
            <label for="exampleDropdownFormPassword2">Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck2"/>
            <label className="form-check-label" for="dropdownCheck2">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            <div id="currencyimage" alt="">
              <img src="../../assets/currency-rates.svg" alt="currency"/>
            </div>
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default ChangeOperation;