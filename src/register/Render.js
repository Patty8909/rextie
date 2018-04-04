import React from 'react';
import './register.css';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="font-general">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderField;