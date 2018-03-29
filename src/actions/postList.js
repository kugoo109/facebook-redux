import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

const serviceBase = 'http://localhost:3000/api/v1/';
const config = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
};

function setPosts(posts) {
  return {
    type: actionTypes.SET_POSTS,
    posts
  };
}

export const getPosts = (postAt) => (dispatch) => {
  const params = postAt ? '?postAt=' + postAt : '';

  axios.get(serviceBase + 'posts' + params, config)
    .then((results) => {
      dispatch(setPosts(results.data));
    });
};

export const addPost = (content, postAt) => (dispatch) => {
  axios.post(serviceBase + 'posts', { content, postAt }, config)
    .then((results) => {
      alert('success');
    });
};
