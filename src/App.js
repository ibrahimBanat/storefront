import React from 'react';
import Header from './components/Header';
// import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';

import { Provider } from 'react-redux';
import store from './provider/store';
import SimpleCart from './components/SimpleCart';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Header />
        <Categories />
        <SimpleCart />
        <Products />
        {/* <Footer /> */}
      </div>
    </Provider>
  );
};

export default App;
