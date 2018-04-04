import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import validate from './Validate';

const FormSuccess = props => {
  const { handleSubmit } = props;
  return ( 
    <form onSubmit={handleSubmit}>
    <div>
      <p>Felicidades ! Estás registrado en Rextie.</p>
      <p>Nuestro horario de atención es de Lunes a Sábado de 9 AM a 6 PM.</p>
      <p>En caso de duda o urgencia, contacta por chat o email info@rextie.com</p>
      </div>
      <div>
        <Link to='/changeofdolars' className="button">
          <button type="submit" className="next" >Ir a página principal</button>
        </Link>
      </div>
    </form>

  );
};
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(FormSuccess);
