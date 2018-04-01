import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./register/Store";
import showResults from "./register/ShowResults";
import Form from "./register/Form";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <Form onSubmit={showResults} />

    </div>
  </Provider>,
  document.getElementById("root")
);
