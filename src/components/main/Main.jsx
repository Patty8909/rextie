import React from 'react';
import AllOperations from './menu/AllOperations';
import Details from './details/Details';

// Json para formulario
const formulario = [
  {
     
  }

]

// Json de cliente
const USER = [
  {
    name: "",
  }
]

const Main = () => (
  <div className="container">
{/*     
      <div className="row justify-content-around">
        <AllOperations className="col-3"/>
        <Details className="col-6"/>
      </div> */}
    <div class="row justify-content-around">
      <AllOperations class="col-4"/>
      <Details class="col-6"/>
    </div>
    
  </div>
);

export default Main;