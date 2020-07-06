import * as React from 'react';
import CartValues from '../CartValues/CartValues';

const ShoppingCart: React.FC = () => {
  function clickCheckout() {
    console.log('checkout');
  }

  return (
    <div className="pl-16 flex flex-col w-3/4">
      <div className="p-2 text-2xl text-center font-bold bg-orange-500 text-orange-900 rounded-t-lg">Shopping Cart</div>
      <div className="produtos comp" />
      <div className="form de desconto" />
      <CartValues name={'Subtotal'} value={234} total={false} />
      <CartValues name={'Shipping'} value={10} total={false} />
      <CartValues name={'Discount'} value={1} total={false} />
      <CartValues name={'Total'} value={243} total={true} />
      <button
        className="mt-10 py-4 bg-orange-900 text-orange-100 font-bold text-lg rounded-lg focus:outline-none hover:bg-orange-500 hover:text-orange-900"
        onClick={() => clickCheckout()}
      >
        CHECKOUT
      </button>
    </div>
  );
};

export default ShoppingCart;
