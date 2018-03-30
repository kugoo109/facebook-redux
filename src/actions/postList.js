import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

const serviceBase = 'http://localhost:3000/api/v1/';
const config = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getPosts = (postAt) => (dispatch) => {
  const params = postAt ? '?postAt=' + postAt : '';

  axios.get(serviceBase + 'posts' + params, config)
    .then((results) => {
      dispatch({ type: actionTypes.SET_POSTS, posts: results.data });
    });
};

export const addPost = (post) => (dispatch) => {
  axios.post(serviceBase + 'posts', post, config)
    .then((results) => {
      dispatch({ type: actionTypes.ADD_POST, post: results.data });
    });
};

export const updatePost = (post) => (dispatch) => {
  axios.put(serviceBase + 'posts', post, config)
    .then((results) => {
      dispatch({ type: actionTypes.UPDATE_POST, post: results.data });
    });
};

export const deletePost = (post) => (dispatch) => {
  axios.delete(serviceBase + 'posts/' + post._id, config)
    .then((results) => {
      dispatch({ type: actionTypes.DELETE_POST, postId: post._id });
    });
};

export const addComment = (comment) => (dispatch) => {
  axios.post(serviceBase + 'comments', comment, config)
    .then((results) => {
      dispatch({ type: actionTypes.UPDATE_POST, post: results.data });
    });
};

export const deleteComment = (comment) => (dispatch) => {
  axios.delete(serviceBase + 'comments/' + comment._id, config)
    .then((results) => {
      dispatch({ type: actionTypes.UPDATE_POST, post: results.data });
    });
};
