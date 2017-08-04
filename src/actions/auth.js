import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

import history from '../services/history';

const serviceBase = 'http://localhost:3000/api/v1/';

function setUser(user) {
  return {
    type: actionTypes.SET_USER,
    user
  };
}

export function resetAuth() {
  return {
    type: actionTypes.RESET_AUTH
  };
}

export const checkme = () => (dispatch) => {
  axios.get(serviceBase + 'auth/checkme')
    .then((results) => {
      dispatch(setUser(results.data));
    });
};

export const register = (user) => (dispatch) => {
  axios.post(serviceBase + 'auth/signup', user)
    .then((results) => {
      dispatch(setUser(results.data));
      navigateTo('/');
    });
};

export const login = ({ username, password }) => (dispatch) => {
  axios.post(serviceBase + 'auth/signin', { username, password })
    .then((results) => {
      dispatch(setUser(results.data));
      navigateTo('/');
    });
};

export const logout = () => (dispatch) => {
  axios.post(serviceBase + 'auth/signout')
    .then(() => {
      dispatch(resetAuth());
      navigateTo('/login');
    });
};

function navigateTo(location) {
  history.push(location);
}

