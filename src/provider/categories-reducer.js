const initialState = {
  categories: ['food', 'electronics'],
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
    case 'GET_C':
      console.log(payload);
      let category = payload.category.map(item => {
        return item.category;
      });
      let unique = [...new Set(category)];
      console.log(unique);
      initialState.categories = unique;

      return { categories: unique, active: '' };

    default:
      return state;
  }
};

export default categoryReducer;
