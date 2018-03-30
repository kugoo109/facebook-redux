import * as actionTypes from '../constants/actionTypes';

const initialState = {
  posts: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case actionTypes.ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts]
      };
    case actionTypes.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post._id === action.post._id) {
            return action.post;
          }
          return post;
        })
      };
    case actionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.postId)
      };
    case actionTypes.ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post._id === action.post._id) {
            return action.post;
          }
          return post;
        })
      };
  }
  return state;
}
