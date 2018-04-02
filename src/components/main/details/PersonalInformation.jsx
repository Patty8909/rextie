import React from 'react';
import '../../../components/confirmationData/data.css'

const PersonalInformation = () => (
  <div className="p-3 col-12 col-lg-9">
    <div className="backg-success text-center">
        <h3 className="mb-0 p-2">Perfil</h3>
      </div>
    <div className="">
      <table className="table">
        <tbody>
          <tr>
            <th className="row">Nombre Completo</th>
            <th>Patricia</th>
          </tr>
          <tr>
            <th className="row">Tipo de Documento</th>
            <td>DNI</td>
          </tr>
          <tr>
            <th className="row">Correo Electr&oacute;nico</th>
            <td>paty@gmail.com</td>
          </tr>
          <tr>
            <th className="row">Fecha de Nacimiento</th>
            <td>24 de Marzo de 1989</td>
          </tr>
          <tr>
            <th className="row">Celular</th>
            <td>953329186</td>
          </tr>
          <tr>
            <th className="row">Ubigeo DNI</th>
            <td>112345</td>
          </tr>
          <tr>
            <th className="row">Ocupaci&oacute;n</th>
            <td>Estudiante</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default PersonalInformation;