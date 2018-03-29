import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth';
import postlist from './postlist';

export default combineReducers({
  form,
  auth,
  postlist,
});
