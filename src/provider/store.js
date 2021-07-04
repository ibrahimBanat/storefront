import { createStore, combineReducers } from 'redux';
import categoriesReducer from './categories-reducer';
import productReducer from './product-reducer';

import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store;
