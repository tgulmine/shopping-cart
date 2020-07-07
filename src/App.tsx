import React, { useEffect, useState } from 'react';
import './styles/main.scss';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import api from './api/api';
import { IProduct, IVoucher } from './utils/interfaces';

const App: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [vouchers, setVouchers] = useState<IVoucher[]>([]);

  const [productsInCart, setProductsInCart] = useState<IProduct[]>([]);
  const [currentAmount, setCurrentAmount] = useState<number[]>([]);

  function addOrRemoveProduct(product: IProduct) {
    const cart = productsInCart;
    const found = productsInCart.findIndex(productInCart => productInCart === product);
    if (found === undefined) cart.push(product);
    else cart.splice(found, 1);
    setProductsInCart(cart);
  }

  const fetchProducts = async () => {
    try {
      const { data } = await api.get('/products.json');
      setProducts(data.products);
    } catch (e) {
      console.log('error fetching products', e.response.data);
    }
  };

  const fetchVouchers = async () => {
    try {
      const { data } = await api.get('/vouchers.json');
      setVouchers(data.vouchers);
    } catch (e) {
      console.log('error fetching vouchers', e.response.data);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchVouchers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(vouchers, products);

  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="pt-16 px-20">
        <div className="flex justify-between">
          <div className="flex flex-wrap w-3/5">
            {products &&
              products.map((product: IProduct, index: number) => {
                return <ProductCard product={product} addOrRemoveProduct={addOrRemoveProduct} />;
              })}
          </div>
          <div className="w-2/5">
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
