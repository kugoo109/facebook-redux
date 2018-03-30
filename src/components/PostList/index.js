import React from 'react';
import map from '../../services/map';

import Post from './Post';

function PostList({ posts }) {
  return (
    <div>
      {
        map((post) => {
          return <Post key={post._id} post={post} />;
        }, posts)
      }
    </div>
  );
}

export default PostList;
