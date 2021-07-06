export const getCategories = category => {
  return {
    type: 'GET_C',
    payload: category,
  };
};
