import React from 'react';
import AllOperations from './menu/AllOperations';

// Json para formulario
const formulario = [
  {
     
  }

]

// Json de cliente
const USER = [
  {
    name: "",
    tipoDoc: [];
    numeroDoc: "";
    email: "";
    fecha_Nac: "";
    celular: "";
    telef_casa: "";
    ubigeo: "";
    ocupacion: "";
  }
]

const Main = () => (
  <div className="container">
    <div className="row justify-content-around">
      <AllOperations className="col-4"/>
    </div>
    
  </div>
);

export default Main;