import { createStore, combineReducers } from 'redux';
import categoriesReducer from './categories-reducer';
import productsReducer from './products-reducer';
import cartReducer from './cart-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
