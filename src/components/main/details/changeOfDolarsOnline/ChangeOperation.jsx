import React from 'react';

const ChangeOperation = () => (
  <div>
    <div className="Container p-3 col-12 col-lg-9">
  <div className="row justify-content-md-center">
    <div className="card border-info mb-3" style={{'maxWidth': '18rem'}}>
      <div className="card-body text-info">
        <h3>Compra: 3.2000
          <span></span>
          &nbsp;-&nbsp;Venta: 3.2480<span></span>
        </h3>
      </div>
    </div>
    </div>
    </div>

    <div className="container">
  <div className="row justify-content-md-center">
    <div className="col col-md-2 change">
      Tengo
    </div>
    <div className="col col-md-2 change">
      USD $
    </div>
  </div>
  <div className="row justify-content-md-center">
    <div className="col col-md-2 change">
      Quiero
    </div>
    <div className="col col-md-2 change">
      PEN S/.
    </div>
   
  </div>
</div>
    
    <div className="container">
      <div className="col-sm-6">
        <form className="dropdown-menu p-4">
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail2">Email address</label>
            <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormPassword2">Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck2"/>
            <label className="form-check-label" htmlFor="dropdownCheck2">
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