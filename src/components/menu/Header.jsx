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
            <li className="nav-item active">
              <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="">Link</a>
            </li>
            <a className="nav-link my-2 my-sm-0" type="submit" role="button">Salir</a>
          </form>
        </div>
      </nav>
    </div>
  </div>
);

export default Header;