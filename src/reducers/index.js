import { combineReducers } from 'redux';
import AdminReducer from '../reducers/admin';
import ProductsReducer from '../reducers/product';

const rootReducer = combineReducers(
  {
    isUserLoggedIn:AdminReducer,
    products:ProductsReducer,
    currentProduct:ProductsReducer
  }
  
);

export default rootReducer;
