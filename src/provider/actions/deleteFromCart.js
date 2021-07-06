export const deleteFromCart = product => {
  return {
    type: 'DELETE',
    payload: product,
  };
};
