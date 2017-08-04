import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/index';

const form = reduxForm({
  form: 'register',
});

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }

  register(formProps) {
    this.props.register(formProps);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="middle-box text-center loginscreen animated fadeInDown">
        <div>
          <div>
            <h1 className="logo-name">f+</h1>
          </div>
          <h3>Register to Facebook Lite</h3>
          <p>Create account to see it in action.</p>
          <form className="m-t" role="form" onSubmit={handleSubmit(this.register)}>
            <div className="form-group">
              <Field type="text" className="form-control" placeholder="Name" required component="input" name="displayName" />
            </div>
            <div className="form-group">
              <Field type="email" className="form-control" placeholder="Email" required component="input" name="email" />
            </div>
            <div className="form-group">
              <Field type="text" className="form-control" placeholder="Username" required component="input" name="username" />
            </div>
            <div className="form-group">
              <Field type="password" className="form-control" placeholder="Password" required component="input" name="password" />
            </div>
            <div className="form-group">
              <div className="checkbox i-checks"><label> <Field type="checkbox" required component="input" name="agree" /><i></i> Agree the terms and policy </label></div>
            </div>
            <button type="submit" className="btn btn-primary block full-width m-b">Register</button>
            <p className="text-muted text-center"><small>Already have an account?</small></p>
            <Link className="btn btn-sm btn-white btn-block" to="/login">Login</Link>
          </form>
          <p className="m-t"> <small><a href="https://github.com/kugoo109"><i className="fa fa-github" aria-hidden="true"></i> kugoo109</a> &copy; 2017</small> </p>
        </div>
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
    register: bindActionCreators(actions.register, dispatch),
  };
}

Register.propTypes = {
  register: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(form(Register));
