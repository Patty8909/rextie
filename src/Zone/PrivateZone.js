import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Switch, Route, NavLink, withRouter } from 'react-router-dom';
import ChangeBox from './changeBox'

const PrivateZone = props =>  {
  const { handleSubmit } = props;
  const local = JSON.parse(localStorage.getItem("firstPerson"))
  return (
    // debería iterarse con map para que con cada click acceda a la ruta onClick={() => navigateTo(id)}>
    <Router>
  <div className="col-md-3 md-mb-2 justify-content-center align-items-center">
    <p><strong>Cuenta Personal</strong></p>
    <p>{`DNI ${local.documentNumber}`}</p>
    <ul className="list-group sidebar-nav mb-4" id="sidebar-nav">
      <li className="d-flex align-items-center">
        <a href="#"><Link to='/changebox'><i className="fa fa-play"></i> Nueva Operación</Link></a>
      </li>
      <li className="list-group-item active">
        <a href="#/"><i className="fa fa-bar-chart-o"></i> Principal</a>
      </li>
      <li className="list-group-item ">
        <a href="#/"><i className="fa fa-user"></i> Información Personal</a>
      </li>
      <li className="list-group-item ">
        <a href="#/"><i className="fa fa-credit-card"></i> Cuentas Bancarias Personales</a>
      </li>
      <li className="list-group-item ">
        <a href="#/"><i className="fa fa-credit-card"></i> Cuentas Bancarias de Terceros</a>
      </li>
      <li className="list-group-item ">
        <a href="#/"><i className="fa fa-random"></i> Operaciones Históricas</a>
      </li>
      <li className="list-group-item ">
        <a href="#/"><i className="fa fa-credit-card"></i> Cuentas Bancarias de Rextie</a>
      </li>
    </ul>

    <Switch>
            <Route path='/changebox' component={ChangeBox} /> 
          </Switch>
  </div>
  </Router>
  );
}

export default PrivateZone