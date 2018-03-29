import PropTypes from 'prop-types';
import React from 'react';
import map from '../../services/map';

import CommentInput from '../../components/PostList/CommentInput';
import Comment from '../../components/PostList/Comment';

function CommentList({ user, comments }) {
  return (
    <div className="social-footer">
      {map((comment) => {
        return <Comment key={comment._id} comment={comment} />;
      }, comments)}
      <CommentInput user={user} />
    </div>
  );
}

export default CommentList;
