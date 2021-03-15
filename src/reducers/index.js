import { combineReducers } from 'redux';
import AdminReducer from '../reducers/admin';

const rootReducer = combineReducers(
  {
    isUserLoggedIn:AdminReducer
  }
  
);

export default rootReducer;
