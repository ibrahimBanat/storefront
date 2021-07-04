const initialState = {
  categories: [
    {
      name: 'Food',
      displayName: 'Food',
      description: 'Food description',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5prfTaOTAyUDETilMUzfaFlgU5UA0MHluHfLLsq4JW18dqzFdidn6R9Es7voek4taAQ8&usqp=CAU',
    },
    {
      name: 'Electronics',
      displayName: 'Electronics',
      description: 'Electronics description',
      url: 'https://www.1stunitedpawn.com/wp-content/uploads/2014/03/Electronics.png',
    },
  ],
  active: '',
};

const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  // eslint-disable-next-line default-case
  switch (type) {
    case 'ACTIVE':
      const categories = state.categories;
      const active = payload;
      return { categories, active };
    default:
      return state;
  }
};

export default categoryReducer;
