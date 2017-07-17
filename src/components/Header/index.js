import PropTypes from 'prop-types';
import React from 'react';
import map from '../../services/map';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/index';
import { browse, dashboard } from '../../constants/pathnames';

function Logo() {
  return (
    <div>
      <Link to="/">
        <h1>Facebook-Redux</h1>
      </Link>
    </div>
  );
}

function MenuItem({ linkText }) {
  const linkClass = classNames('menu-item');

  return (
    <Link to="/" className={linkClass}>
      {linkText}
    </Link>
  );
}

function Login({ onLogin }) {
  return (
    <Link onClick={onLogin} to={dashboard}>
      Login
    </Link>
  );
}

function Logout({ onLogout }) {
  return (
    <Link onClick={onLogout} to={browse}>
      Logout
    </Link>
  );
}

function SessionAction({ currentUser, onLogin, onLogout }) {
  return (
    <div>
      { currentUser ? <Logout onLogout={onLogout} /> : <Login onLogin={onLogin} /> }
    </div>
  );
}

function MenuList() {
  return (
    <div>
      {map((text, key) => {
        const menuItemProps = { text, key };
        return <MenuItem {...menuItemProps} />;
      }, ['News Feed', 'Messenger'])}
    </div>
  );
}

function Header({ currentUser, onLogin, onLogout }) {
  return (
    <div className="header">
      <div className="header-content">
        <Logo />
        <MenuList />
        <SessionAction currentUser={currentUser} onLogin={onLogin} onLogout={onLogout} />
      </div>
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
