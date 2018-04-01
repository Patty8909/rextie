import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './Validate';
import renderField from './Render';

const FormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
    <Field name="email" type="email" component={renderField} label="Email" />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Contraseña"
      />
      <div>
        <label htmlFor="termsAndConditions">Aceptar Términos y Condiciones y Política de Privacidad</label>
        <div>
          <Field
            name="termsAndConditions"
            id="termsAndConditions"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <button type="submit" className="next">Regístrate</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(FormFirstPage);
