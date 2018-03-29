import PropTypes from 'prop-types';
import React from 'react';
import map from '../../services/map';

import PostInput from './PostInput';
import Post from './Post';

function PostList({ user, posts, addPost }) {
  return (
    <div>
      <PostInput user={user} addPost={addPost} />
      {map((post) => {
        return <Post key={post._id} post={post} />;
      }, posts)}
    </div>
  );
}

export default PostList;
