import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import CommentList from './CommentList';

function Post({ post }) {
  return (
    <div className="social-feed-box">
      <div className="social-avatar">
        <Link className="pull-left" to={'/profile/' + post.user.username}>
          <img alt="image" src={ post.user.profileImageURL }/>
        </Link>
        <div className="media-body">
          <div>
            <Link to={'/profile/' + post.user.username}>{ post.user.displayName }</Link>
            <span className="__todo">
              <span>&nbsp;</span>
              <i className="fa fa-caret-right"></i>
                <span>&nbsp;</span>
                <Link to={'/profile/' + post.postAt.username}>{ post.postAt.displayName }</Link>
            </span>
          </div>
          <small className="text-muted"><time title="__todo">{ post.created }</time></small>
        </div>
      </div>
      <div className="social-body">
        <p>{ post.content }</p>
        <div className="btn-group">
          <button className="btn btn-xs">
            <i className="fa fa-thumbs-up"></i> { post.likes.length } Like
          </button>
          <button className="btn btn-white btn-xs">
            <i className="fa fa-comments"></i> Comment
          </button>
        </div>
      </div>
      <CommentList comments={post.comments} />
    </div>
  );
}

export default Post;
