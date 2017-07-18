import PropTypes from 'prop-types';
import React from 'react';
import map from '../../services/map';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/index';
import { browse, dashboard } from '../../constants/pathnames';

function NewsFeed({ currentUser, onLogin, onLogout }) {
  return (
    <div className="row">
      News Feed page
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

NewsFeed.propTypes = {
  currentUser: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
