const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  if (!values.termsAndConditions) {
    errors.termsAndConditions = 'Required';
  }
  if (!values.idDocument) {
    errors.idDocument = 'Required';
  }
  if (!values.documentNumber) {
    errors.documentNumber = 'Required';
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required';
  }
  if (!values.ocupation) {
    errors.ocupation = 'Required';
  }
  return errors;
};

export default validate;
