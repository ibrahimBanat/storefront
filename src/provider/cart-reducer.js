let intialState = {
  cart: [],
  visible: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD':
      const products = state.cart.map(product => {
        return product.name;
      });
      if (!products.includes(payload.name)) {
        return { cart: [...state.cart, payload], visible: true };
      }
    case 'SHOW':
      return { cart: state.cart, visible: payload };
    default:
      break;
  }
};
