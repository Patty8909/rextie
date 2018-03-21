import React from 'react';
import Logo from '../../assets/logo.png';

const Header = () => (
  <div>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="">
          <img src={Logo} alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav pull-right mr-auto">
            </ul>
          <div className="btn-group">
          <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Usuario
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="">Salir</a>
            
          </div>
        </div>
        </div>
      </nav>
    </div>
  </div>
);

export default Header;