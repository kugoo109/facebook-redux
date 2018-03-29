import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function Comment({ comment }) {
  return (
    <div className="social-comment box-hover">
      <Link className="pull-left" to={'/profile/' + comment.user.username}>
        <img alt="image" src={ comment.user.profileImageURL }/>
      </Link>
      <div className="pull-right btn-hover">
        <a><i className="fa fa-times"></i></a>
      </div>
      <div className="media-body">
        <Link to={'/profile/' + comment.user.username}>{ comment.user.displayName }</Link>
        { comment.content }
        <br/>
        <small className="text-muted"><time title="__todo">{ comment.created }</time></small>
      </div>
    </div>
  );
}

export default Comment;
