import axios from 'axios';
import { getProducts } from '../getProducts';
let url = 'https://api-server-0.herokuapp.com/products';
const getApiData = url => {
  return dispatch => {
    return axios.get(url).then(response => {
      dispatch(getProducts({ products: response.body.result }));
    });
  };
};
export default getApiData;
