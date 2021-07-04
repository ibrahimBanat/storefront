import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import { Provider } from 'react-redux';
import store from './provider/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Header />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
