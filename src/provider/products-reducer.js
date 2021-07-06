let initialState = {
  products: [
    {
      name: 'Apple MacBook Pro 13',
      category: 'Electronics',
      price: 1100,
      count: 12,
      image:
        'https://gts.jo/image/cache/catalog/products/laptops/apple/MPXT2AB-1200x1200.jpg',
    },
    {
      name: 'ASUS hero2',
      category: 'Electronics',
      price: 1000,
      count: 16,
      image:
        'https://www.crownexcel.ae/wp-content/uploads/2019/11/81TKu9guqL._SL1500_.jpg',
    },
    {
      name: 'Samsung Smart TV',
      category: 'Electronics',
      price: 700,
      count: 16,
      image:
        'https://images.samsung.com/is/image/samsung/levant-uhd-tu8000-ua50tu8000uxtw-frontblack-229856395?$720_576_PNG$',
    },
    {
      name: 'PECORINO MARZOLINO',
      category: 'Food',
      price: 15,
      count: 15,
      image:
        'https://cdn11.bigcommerce.com/s-7c08qbh/images/stencil/600x600/products/2675/8034/marzolino_wheel-1__93459.1622557124.jpg?c=2',
    },
    {
      name: 'ROSEMARY CROSTINI',
      category: 'Food',
      price: 4,
      count: 45,
      image:
        'https://cdn11.bigcommerce.com/s-7c08qbh/images/stencil/600x600/products/384/1125/DB_CrostiniRosemary_web_edited_db__22481.1612903991.jpg?c=2',
    },
    {
      name: 'SALTED ROSEMARY SHORTBREAD',
      category: 'Food',
      price: 6,
      count: 11,
      image:
        'https://cdn11.bigcommerce.com/s-7c08qbh/images/stencil/600x600/products/1891/5490/large__35479.1618332683.jpg?c=2',
    },
  ],
};

const productsReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      let product = state.products.filter(product =>
        product.category === payload ? product.category : null
      );
      return { ...state, product: product };
    case 'ADDTOCART':
      state.products = state.products.map(product => {
        if (product.name === payload.name) {
          if (product.count > 0) {
            product.count = product.count - 1;
          }
          return product;
        }
        return product;
      });
      return { ...state };
    case 'GET_PRODUCTS':
      initialState = payload;
      return payload;
    default:
      return state;
  }
};

export default productsReducer;
