import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

import history from '../services/history';

const serviceBase = 'http://localhost:3000/api/v1/';
const config = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
};

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

export const checkme = (returnPath) => (dispatch) => {
  axios.get(serviceBase + 'auth/checkme', config)
    .then((results) => {
      if(results.data) {
        dispatch(setUser(results.data));
        navigateTo(returnPath || '/');
      }
    });
};

export const register = (user) => (dispatch) => {
  axios.post(serviceBase + 'auth/signup', user, config)
    .then((results) => {
      dispatch(setUser(results.data));
      navigateTo('/');
    });
};

export const login = ({ username, password }) => (dispatch) => {
  axios.post(serviceBase + 'auth/signin', { username, password }, config)
    .then((results) => {
      dispatch(setUser(results.data));
      navigateTo('/');
    });
};

export const logout = () => (dispatch) => {
  axios.post(serviceBase + 'auth/signout', null, config)
    .then(() => {
      dispatch(resetAuth());
      navigateTo('/login');
    });
};

function navigateTo(location) {
  history.push(location);
}

