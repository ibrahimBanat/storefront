export const activeCategory = name => {
  return {
    type: 'ACTIVE',
    payload: name,
  };
};
