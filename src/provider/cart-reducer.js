let intiState = { cart: [], visible: false };
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = intiState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD':
      const products = state.cart.map(product => product.name);
      if (!products.includes(payload.name)) {
        return { cart: [...state.cart, payload], visible: true };
      }

      return { cart: state.cart, show: true };
    case 'DELETE':
      const product = state.cart.filter(product => {
        return product.name !== payload.name;
      });
      return { cart: [...product], visible: true };
    default:
      return state;
  }
};
