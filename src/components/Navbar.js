import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Navbar({ currentUser }) {
  return (
    <nav className="navbar-default navbar-static-side" role="navigation">
      <div className="sidebar-collapse">
        <ul className="nav metismenu" id="side-menu">
          <li className="nav-header">
            <div className="dropdown profile-element">
              <Link to="/profile">
                <span><img alt="image" className="img-circle"/></span>
                <span className="clear"/>
                <span className="block m-t-xs"> <strong className="font-bold">{ currentUser.displayName }</strong></span>
              </Link>
              <span className="text-muted text-xs block">{ currentUser.title }</span>
            </div>
            <div className="logo-element">
              f+
            </div>
          </li>
          <li>
            <Link to="/"><i className="fa fa-newspaper-o"></i> <span className="nav-label">News Feed</span></Link>
          </li>
          <li>
            <Link to="/messenger"><i className="fa fa-envelope"></i> <span className="nav-label">Messenger</span></Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
