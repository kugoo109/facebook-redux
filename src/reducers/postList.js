import * as actionTypes from '../constants/actionTypes';

const initialState = {
  posts: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return setPosts(state, action.posts);
  }
  return state;
}

function setPosts(state, posts) {
  return { ...state, posts };
}
