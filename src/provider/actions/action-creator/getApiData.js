import axios from 'axios';
import getProducts from '../getProducts';
import { getCategories } from '../getCategories';

let url = 'https://api-server-0.herokuapp.com/products';
export const getApiData = () => {
  return dispatch => {
    return axios.get(url).then(response => {
      console.log(response);
      dispatch(getCategories({ category: response.data }));
      dispatch(getProducts({ products: response.data }));
    });
  };
};
