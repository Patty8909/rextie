import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './Validate';

const FormSuccess = props => {
  const { handleSubmit } = props;
  return ( 
    <form onSubmit={handleSubmit}>
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Felicidades ! Estás registrado en Rextie.</h4>
      <p>Nuestro horario de atención es de Lunes a Sábado de 9 AM a 6 PM.</p>
      <p class="mb-0">En caso de duda o urgencia, contacta por chat o email info@rextie.com</p>
      <hr/>
      <div>
        <button type="submit" className="next btn btn-outline-info" >Ir a página principal</button>
      </div>
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
