const getProducts = product => {
  return {
    type: 'GET_PRODUCTS',
    payload: product,
  };
};
export default getProducts;
