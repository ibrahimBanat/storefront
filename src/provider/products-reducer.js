const initialState = {
  products: [
    {
      name: 'Iphone 12 Pro Max',
      category: 'Electronics',
      price: 800,
      count: 32,
      image:
        'https://assets.swappie.com/swappie-product-iphone-12-pro-max-graphite.png',
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
      name: 'Pizza',
      category: 'Food',
      price: 6,
      count: 15,
      image:
        'https://lh3.googleusercontent.com/proxy/5UulawJ1fMPviHA_aoCKxxlgv4cc9tFlGHDH0CQKe6BtomVH2yYPhgBac3EN8LIsP9DM-QF9rSe9ldv42HL9-iFnycfgynFY7ezZOKMcE8pR5ozYwHo1U6yv3NNSWW4',
    },
    {
      name: 'Burger',
      category: 'Food',
      price: 4,
      count: 45,
      image:
        'https://pngimage.net/wp-content/uploads/2018/05/amburguesa-png.png',
    },
    {
      name: 'Ice cream',
      category: 'Food',
      price: 3,
      count: 11,
      image:
        'https://www.freeiconspng.com/thumbs/ice-cream-png/fruits-ice-cream-png-1.png',
    },
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
const productsReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      let product = state.products.filter(product =>
        product.category === payload ? product.category : null
      );
      return { ...state, product: product };
    default:
      return state;
  }
};

export default productsReducer;
