import PropTypes from 'prop-types';
import React from 'react';
import map from '../../services/map';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/index';

function Footer() {
  return (
    <div className="footer">
      <div>
        <Link to="https://github.com/kugoo109">
          <i className="fa fa-github" aria-hidden="true"></i> kugoo109
        </Link> &copy; 2017
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

Footer.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
