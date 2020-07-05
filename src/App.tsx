import React, { useEffect, useState } from 'react';
import './styles/main.scss';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import api from './api/api';

interface Vouchers {
  vouchers: IVoucher[];
}
interface IVoucher {
  id: number;
  code: string;
  type: string;
  amount: number;
  minValue: number;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<any>();
  const [vouchers, setVouchers] = useState<any[]>([]);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get('/products.json');
      setProducts(data);
      console.log('products', products);
    } catch (e) {
      console.log('error fetching products', e.response.data);
    }
  };

  const fetchVouchers = async () => {
    try {
      const { data } = await api.get('/vouchers.json');
      var vouch: any[] = [];
      data.vouchers.forEach((voucher: any, index: number) => {
        vouch.push(data.vouchers[index]);
      });
      console.log('vouch', vouch);
      setVouchers(vouch);
      console.log('vouchers', vouchers);
    } catch (e) {
      console.log('error fetching vouchers', e.response.data);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchVouchers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="container">
        <div className="flex items-center">
          <div className="product cards">
            <ProductCard />
          </div>
          <div className="shopping cart">
            <ShoppingCart />
          </div>
        </div>
      </div>
      <div className="App mt-2 text-2xl font-bold">rs</div>
      <div className="mt-2 text-gray-nanana">world!</div>
    </div>
  );
};

export default App;
