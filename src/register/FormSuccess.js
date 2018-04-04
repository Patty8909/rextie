import React from 'react';
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
<<<<<<< HEAD
        <button type="submit" className="next" >Ir a página principal</button>
=======
      <button type="submit" className="next" >Ir a página principal</button>
>>>>>>> 67b06b4e7e25706787a12332a07c23657762de47
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
