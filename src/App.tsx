import * as React from 'react';
import './styles/main.scss';
import axios from 'axios';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="App mt-2 text-2xl font-bold">Hello</div>
      <div className="mt-2 text-gray-nanana">world!</div>
    </div>
  );
};

export default App;
