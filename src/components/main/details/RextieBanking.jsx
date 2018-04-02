import React from 'react';

const RextieBanking = () => (
  <div className="Container p-3 col-12 col-lg-9">
    <div>  
      <h3>Cuentas Bancarias de Rextie</h3>
      <p>CCI Interbank (para transferencias interbancarias)</p>
      <div className="table-responsive">
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">Tipo de Cuenta</th>
              <th scope="col">Moneda</th>
              <th scope="col">N&uacute;mero de Cuenta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Corriente</td>
              <td>D&oacute;lares</td>
              <td>00316600300127343563</td>
            </tr>
            <tr>
              <td>Corriente</td>
              <td>Soles</td>
              <td>00316600300127342868</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>INTERBANK</p>
      <div className="table-responsive">
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">Tipo de Cuenta</th>
              <th scope="col">Moneda</th>
              <th scope="col">N&uacute;mero de Cuenta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Corriente</td>
              <td>D&oacute;lares</td>
              <td>1663001273435</td>
            </tr>
            <tr>
              <td>Corriente</td>
              <td>Soles</td>
              <td>1663001273428</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>BCP</p>
      <div className="table-responsive">
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">Tipo de Cuenta</th>
              <th scope="col">Moneda</th>
              <th scope="col">N&uacute;mero de Cuenta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Corriente</td>
              <td>D&oacute;lares</td>
              <td>1931700523109</td>
            </tr>
            <tr>
              <td>Corriente</td>
              <td>Soles</td>
              <td>1932357833093</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default RextieBanking;