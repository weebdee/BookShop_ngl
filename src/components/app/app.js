import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210}/>
      <Route
        path="/"
        component={HomePage}
        exact />

      <Route
        path="/cart"
        component={CartPage}
      />
    </main>
  );
};

export default App;
