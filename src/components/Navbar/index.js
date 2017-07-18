import PropTypes from 'prop-types';
import React from 'react';
import map from '../../services/map';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/index';

function Navbar({ currentUser, onLogin, onLogout }) {
  return (
    <nav className="navbar-default navbar-static-side" role="navigation">
      <div className="sidebar-collapse">
        <ul className="nav metismenu" id="side-menu">
          <li className="nav-header">
            <div className="dropdown profile-element">
              <a>
                <span><img alt="image" className="img-circle"/></span>
                <span className="clear"/>
                <span className="block m-t-xs"> <strong className="font-bold">{currentUser}</strong></span>
              </a>
              <span className="text-muted text-xs block">Fullstack Developer</span>
            </div>
            <div className="logo-element">
              f+
            </div>
          </li>
          <li>
            <a><i className="fa fa-newspaper-o"></i> <span className="nav-label">News Feed</span></a>
          </li>
          <li>
            <a><i className="fa fa-envelope"></i> <span className="nav-label">Messenger</span></a>
          </li>
        </ul>

      </div>
    </nav>
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

Navbar.propTypes = {
  currentUser: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
