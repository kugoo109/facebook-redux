import Cookies from 'js-cookie';
import * as actionTypes from '../../constants/actionTypes';

function setSession(session) {
  return {
    type: actionTypes.SET_SESSION,
    session
  };
}

export function resetSession() {
  return {
    type: actionTypes.RESET_SESSION
  };
}

export const login = () => (dispatch) => {
  Cookies.set(OAUTH_TOKEN, session.oauth_token);
  dispatch(setSession(session));
};

export const logout = () => (dispatch) => {
  Cookies.remove(OAUTH_TOKEN);
  dispatch(resetSession());
};
