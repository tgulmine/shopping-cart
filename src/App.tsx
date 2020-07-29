import React, { useEffect, useState } from 'react';
import './styles/main.scss';
import { Header } from './components/Header/';
import { ProductCard } from './components/ProductCard/';
import { ShoppingCart } from './components/ShoppingCart/';
/* import { api } from './api/'; */
import { IProduct, IVoucher } from './utils/interfaces';
import dataProducts from './data/products.json';
import dataVouchers from './data/vouchers.json';

const App: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [vouchers, setVouchers] = useState<IVoucher[]>([]);
  const [productsInCart, setProductsInCart] = useState<IProduct[]>([]);

  function addOrRemoveProduct(product: IProduct) {
    let cart = [...productsInCart];
    const found = cart.find(productInCart => productInCart === product);
    product.inCart = found ? 0 : 1;
    setProductsInCart(found ? cart.filter(p => p !== product) : [...cart, product]);
  }

  function updateProductQuantity(product: IProduct, add: boolean) {
    let cart = [...productsInCart];
    const newProduct = cart.find(productInCart => productInCart === product);
    if (newProduct) {
      if (add && newProduct.inCart < newProduct.available) newProduct.inCart++;
      else if (!add && newProduct.inCart > 0) newProduct.inCart--;
      let index = cart.findIndex(productInCart => productInCart === product);
      cart.splice(index, 1, newProduct);
      setProductsInCart(cart);
    }
  }

  /* function setCurrentProducts(products: IProduct[]) {
    products.map((p: IProduct) => (p.inCart = 0));
    setProducts(products);
  } */

  const fetchProducts = async () => {
    /* try {
      const { data } = await api.get('/products.json');
      setCurrentProducts(data.products);
    } catch (e) {
      console.log('error fetching products', e.response.data);
    } */
    setProducts(dataProducts.products);
  };

  const fetchVouchers = async () => {
    /* try {
      const { data } = await api.get('/vouchers.json');
      setVouchers(data.vouchers);
    } catch (e) {
      console.log('error fetching vouchers', e.response.data);
    } */
    setVouchers(dataVouchers.vouchers);
  };

  useEffect(() => {
    /* I still left the code for the api call but changed it to get the data directly 
    from json files because the api is not reliable */
    fetchProducts();
    fetchVouchers();
    console.log(
      'Vouchers:\n#30OFF: percentual voucher of 30%\n#100DOLLARS: fixed voucher of $100.00\n#SHIPIT: free shipping voucher with minimum value of $300.50'
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Header />
      <div className="pt-10 md:pt-12 lg:pt-16 px-6 lg:px-20">
        <div className="flex flex-wrap md:flex-no-wrap justify-between">
          <div className="flex flex-wrap w-full md:w-1/2 lg:w-3/5 justify-around content-start lg:justify-start">
            {products &&
              products.map((product: IProduct, index: number) => {
                return <ProductCard key={index} product={product} addOrRemoveProduct={addOrRemoveProduct} />;
              })}
          </div>
          <div className="w-full flex md:w-1/2 lg:w-2/5 justify-center md:justify-start">
            <ShoppingCart
              productsInCart={productsInCart}
              updateProductQuantity={updateProductQuantity}
              vouchers={vouchers}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
