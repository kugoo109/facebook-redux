import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth';
import postlist from './postList';

export default combineReducers({
  form,
  auth,
  postlist,
});
