const getProducts = product => {
  return {
    type: 'GET_P',
    payload: product,
  };
};
export default getProducts;
