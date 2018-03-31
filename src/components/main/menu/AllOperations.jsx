import React from 'react';

const AllOperations = ({id, navigateTo}) => (
  // debería iterarse con map para que con cada click acceda a la ruta onClick={() => navigateTo(id)}>

  <div className="col-md-4 md-mb-2 justify-content-center align-items-center">
    <p><strong>Cuenta Personal</strong></p>
    <p>DNI - 43496820</p>
    <p>Urco, Patricia</p>
    <ul className="list-group sidebar-nav mb-4" id="sidebar-nav">
      <li className="list-group-item list-group-item-action list-group-item-info d-flex align-items-center">
        <a className="text-secondary" href="#/"><i className="fa fa-play"></i> Nueva Operación</a>
      </li>
      <li className="list-group-item list-group-item-action">
        <a className="text-secondary" href="#/"><i className="fa fa-bar-chart-o"></i> Principal</a>
      </li>
      <li className="list-group-item list-group-item-action">
        <a className="text-secondary" href="#/"><i className="fa fa-user"></i> Información Personal</a>
      </li>
      <li className="list-group-item list-group-item-action">
        <a className="text-secondary" href="#/"><i className="fa fa-credit-card"></i> Cuentas Bancarias Personales</a>
      </li>
      <li className="list-group-item list-group-item-action">
        <a className="text-secondary" href="#/"><i className="fa fa-credit-card"></i> Cuentas Bancarias de Terceros</a>
      </li>
      <li className="list-group-item list-group-item-action">
        <a className="text-secondary" href="#/"><i className="fa fa-random"></i> Operaciones Históricas</a>
      </li>
      <li className="list-group-item list-group-item-action">
        <a className="text-secondary" href="#/"><i className="fa fa-credit-card"></i> Cuentas Bancarias de Rextie</a>
      </li>
    </ul>
</div>
);

export default AllOperations;