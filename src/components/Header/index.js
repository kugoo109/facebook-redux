import PropTypes from 'prop-types';
import React from 'react';
import map from '../../services/map';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/index';

function Header({ currentUser, onLogin, onLogout }) {
  return (
    <div className="row border-bottom white-bg">
      <nav className="navbar navbar-static-top" role="navigation">
        <div className="navbar-header">
          <Link className="navbar-minimalize minimalize-styl-2 btn btn-primary" to="/"><i className="fa fa-bars"></i> </Link>
          <form role="search" className="navbar-form-custom">
            <div className="form-group">
              <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search"/>
            </div>
          </form>
        </div>
        <ul className="nav navbar-top-links navbar-right">
          <li>
            <span className="m-r-sm text-muted welcome-message">Welcome to Facebook Redux.</span>
          </li>
          <li><Link onClick={onLogout} to="/"><i className="fa fa-sign-out"></i> Log out</Link></li>
        </ul>
      </nav>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.session.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: bindActionCreators(actions.login, dispatch),
    onLogout: bindActionCreators(actions.logout, dispatch),
  };
}

Header.propTypes = {
  currentUser: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
