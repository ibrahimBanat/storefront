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

    default:
      return state;
  }
};
