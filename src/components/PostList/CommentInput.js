import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function CommentInput({ user }) {
  return (
    <div className="social-comment">
      <a className="pull-left"><img alt="image" src=""/></a>
      <div className="media-body">
        <textarea className="form-control" placeholder="Write comment..."></textarea>
      </div>
    </div>
  );
}

export default CommentInput;
