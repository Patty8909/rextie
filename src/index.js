import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./register/Store";
import showResults from "./register/ShowResults";
import Form from "./register/Form";
import Logo from './assets/logo.png';
import './footer.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

render(
  <Provider store={store}>
  <div>
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
            <i className="fa fa-user-o"></i> Usuario
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="">Salir</a>
            
          </div>
        </div>
        </div>
      </nav>
    </div>
  </div>

    <div style={{ padding: 15 }}>
      <Form onSubmit={showResults} />
    </div>

    <footer className="style-footer pt-0">
  <div className="container">
    <div className="row mt-3 pt-5 justify-content-center">
      <div className="col-md-4 mx-auto md-mb-4">
        <h4 className="title-strong pb-2">
          <strong className="pb-4">Registrados en</strong>
        </h4>
        <ul>
          <li><a href="http://www.sbs.gob.pe/directorios/registro-de-casas-de-cambio-creditos-prestamos-y-empenos/publicacion-del-registro/casas-de-cambio">Superintendencia de Banca, Seguros y AFP</a></li>
          <li><a href="http://e-consultaruc.sunat.gob.pe/cl-ti-itmrconsruc/jcrS00Alias">SUNAT REXTIE S.A.C RUC: 20601030013</a></li>
        </ul>
      </div>
      <div className="col-md-4 mx-auto md-mb-4">
        <h4 className="title-strong pb-2">
          <strong className="pb-4">Enlaces</strong>
        </h4>
        <ul>
          <li><a href="#!">Ayuda</a></li>
          <li><a href="#!">T&eacute;rminos y Condiciones de Uso</a></li>
          <li><a href="#!">Pol&iacute;tica de Privacidad</a></li>
          <li><a href="#!">Libro de Reclamaciones</a></li>
        </ul>
      </div>
      <div className="col-md-4 mx-auto md-mb-4">
        <h4 className="title-strong pb-2">
          <strong className="pb-4">Cont&aacute;ctenos</strong>
        </h4>
        <ul>
          <li><i className="fa fa-home mr-3"></i> Ricardo Angulo 745, Oficina 402 Urb. Corpac, San Isidro, Lima, Peru</li>
          <li><i className="fa fa-envelope mr-3"></i> info@rextie.com</li>
          <li><i className="fa fa-phone mr-3"></i> (+51) (01) 642 9617 | (01) 342 2571</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><i className="fa fa-facebook mr-3"></i></li>
          <li><i className="fa fa-twitter mr-3"></i></li>
          <li><i className="fa fa-google-plus mr-3"></i></li>
          <li><i className="fab fa-linkedin-in mr-3"></i></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="py-3 text-center">
    <i className="far fa-copyright mr-3"></i> 2016-2017 REXTIE SAC<span> Todos los derechos reservados.</span>
  </div>
</footer>

  </div>
  </Provider>,
  document.getElementById("root")
);
