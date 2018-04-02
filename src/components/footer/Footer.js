import React from 'react';
import './Footer.css'

const Footer = () => (
<footer className="style-footer pt-0">
  <div className="container">
    <div className="row mt-3 pt-5 justify-content-center">
      <div className="col-md-4 mx-auto md-mb-4">
        <h4 className="title-strong pb-2">
          <strong className="pb-4">Registrados en</strong>
        </h4>
        <ul>
          <li><a className="link-footer" href="http://www.sbs.gob.pe/directorios/registro-de-casas-de-cambio-creditos-prestamos-y-empenos/publicacion-del-registro/casas-de-cambio">Superintendencia de Banca, Seguros y AFP</a></li>
          <li><a className="link-footer" href="http://e-consultaruc.sunat.gob.pe/cl-ti-itmrconsruc/jcrS00Alias">SUNAT REXTIE S.A.C RUC: 20601030013</a></li>
        </ul>
      </div>
      <div className="col-md-4 mx-auto md-mb-4">
        <h4 className="title-strong pb-2">
          <strong className="pb-4">Enlaces</strong>
        </h4>
        <ul>
          <li><a className="link-footer" href="#!">Ayuda</a></li>
          <li><a className="link-footer" href="#!">T&eacute;rminos y Condiciones de Uso</a></li>
          <li><a className="link-footer" href="#!">Pol&iacute;tica de Privacidad</a></li>
          <li><a className="link-footer" href="#!">Libro de Reclamaciones</a></li>
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
        <ul className="list-inline">
          <li className="list-inline-item"><a href="https://www.facebook.com/RextiePeru"><i className="icon-center px-4 py-3 fab fa-facebook-f mr-3"></i></a></li>
          <li className="list-inline-item"><a href="https://twitter.com/rextieperu"><i className="icon-center p-3 fab fa-twitter mr-3"></i></a></li>
          <li className="list-inline-item"><a href="https://plus.google.com/+Rextie"><i className="icon-center px-3 py-3 fab fa-google-plus-g mr-3"></i></a></li>
          <li className="list-inline-item"><a href="https://www.linkedin.com/company-beta/16178273/"><i className="icon-center p-3 fab fa-linkedin-in mr-3"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="py-3 text-center">
    <i className="far fa-copyright mr-3"></i> 2016-2017 REXTIE SAC<span> Todos los derechos reservados.</span>
  </div>
</footer>
);

export default Footer;