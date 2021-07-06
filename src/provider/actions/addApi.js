const addApi = data => {
  return {
    type: 'GET_DATA',
    payload: data,
  };
};
export default addApi;
