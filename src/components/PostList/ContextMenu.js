import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import * as actions from '../../actions/index';

function ContextMenu({ action }) {
  return (
    <div className="pull-right social-action dropdown">
      <button data-toggle="dropdown" className="dropdown-toggle btn-white">
        <i className="fa fa-angle-down"></i>
      </button>
      <ul className="dropdown-menu m-t-xs">
        <li><a onClick={action}>Delete</a></li>
      </ul>
    </div>
  );
}

export default ContextMenu;
