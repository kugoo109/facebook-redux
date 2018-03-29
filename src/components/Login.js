import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/index';

const form = reduxForm({
  form: 'login',
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login(formProps) {
    this.props.login(formProps);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="middle-box text-center loginscreen animated fadeInDown">
        <div>
          <h1 className="logo-name">f+</h1>
        </div>
        <h3>Welcome to Facebook Lite</h3>
        <p>Login in. To see it in action.</p>
        <form className="m-t" role="form" onSubmit={handleSubmit(this.login)}>
          <div className="form-group">
            <Field type="text" className="form-control" placeholder="Username" required="" component="input" name="username" />
          </div>
          <div className="form-group">
            <Field type="password" className="form-control" placeholder="Password" required="" component="input" name="password" />
          </div>
          <button type="submit" className="btn btn-primary block full-width m-b">Login</button>
            <a href="#"><small>Forgot password?</small></a>
            <p className="text-muted text-center"><small>Do not have an account?</small></p>
            <Link className="btn btn-sm btn-white btn-block" to="/register">Create an account</Link>
        </form>
        <p className="m-t"><small><a href="https://github.com/kugoo109"><i className="fa fa-github" aria-hidden="true"></i> kugoo109</a> &copy; 2017</small> </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(actions.login, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(form(Login));
