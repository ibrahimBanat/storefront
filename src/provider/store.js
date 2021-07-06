import { createStore, combineReducers, applyMiddleware } from 'redux';
import categoriesReducer from './categories-reducer';
import thunk from '../middleware/thunk';
import productsReducer from './products-reducer';
import cartReducer from './cart-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default store();
