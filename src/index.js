import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Redux setup
import { createStore } from "redux";
import reducer from '../src/store/reducer'
import { Provider } from 'react-redux'
import { render } from "react-dom";
import { Values } from "redux-form-website-template";
import showResults from "./register/ShowResults";
import Form from "./register/Form";
import Logo from './assets/logo.png';
import Footer from './components/footer/Footer';
import './footer.css'

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App>
      <div>
        <div style={{ padding: 15 }}>
          <Form onSubmit={showResults} />
        </div>
        <Footer />
      </div>
    </App>
  </Provider>,
  document.getElementById("root")
);

  // ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
  // registerServiceWorker();