import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormFirstPage from './FormFirstPage';
import FormSecondPage from './FormSecondPage';
import FormSuccess from './FormSuccess';
import App from '../App';

class Form extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { nextPage } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <FormFirstPage onSubmit={this.nextPage} />}
        {page === 2 &&
          <FormSecondPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
            nextPage = {this.nextPage} 
          />}
          {page === 3 &&
          <FormSuccess
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
          {page === 4 &&
          <App
            onSubmit={this.nextPage}
          />}
      </div>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
