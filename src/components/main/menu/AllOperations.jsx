import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class AllOperations extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
    // this.handleLogout = this.handleLogout.bind(this);
  }
  render() {
  const local = JSON.parse(localStorage.getItem("firstPerson"))
    return (
      
        <div className="col-md-3 col-lg-3">
          <p><strong>Cuenta Personal</strong></p>
          <p>{`DNI ${local.documentNumber}`}</p>
          <p>Urco, Patricia</p>
          <ul className="list-group sidebar-nav mb-4" id="sidebar-nav">
            <li className="list-group-item list-group-item-action list-group-item-info d-flex align-items-center all-items">
              <Link to="/" className="text-secondary">
                <i className="fa fa-play"></i> Nueva Operación
              </Link>
            </li>
            <li className="list-group-item list-group-item-action">
              <Link to="/information" className="text-secondary">
                <i className="fa fa-user"></i> Información Personal
              </Link>         
            </li>
            <li className="list-group-item list-group-item-action">
              <Link to="/personalbankaccount" className="text-secondary">
                <i className="fa fa-credit-card"></i> Cuentas Bancarias Personales
              </Link>         
            </li>
            <li className="list-group-item list-group-item-action">
              <Link to="/thirdbank" className="text-secondary">
                <i className="fa fa-credit-card"></i> Cuentas Bancarias de Terceros
              </Link>         
            </li>
            <li className="list-group-item list-group-item-action">
              <Link to="/history" className="text-secondary">
                <i className="fa fa-random"></i> Operaciones Históricas
              </Link>         
            </li>
            <li className="list-group-item list-group-item-action">
              <Link to="/rextiebanking" className="text-secondary">
                <i className="fa fa-credit-card"></i> Cuentas Bancarias de Rextie
              </Link>         
            </li>
          </ul>
        </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(AllOperations);