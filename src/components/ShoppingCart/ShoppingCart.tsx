import React, { useState, useEffect } from 'react';
import { CartValues } from '../CartValues/';
import { ProductInCart } from '../ProductInCart/';
import { DiscountForm } from '../DiscountForm';
import { PaymentModal } from '../PaymentModal';
import { IProduct, IVoucher, IValues } from '../../utils/interfaces';

interface ShoppingCartProps {
  productsInCart: IProduct[];
  updateProductQuantity: (product: IProduct, add: boolean) => void;
  vouchers: IVoucher[];
}

const ShoppingCart: React.FC<ShoppingCartProps> = props => {
  const { productsInCart } = props;
  const { vouchers } = props;

  const emptyValues = {
    subtotal: 0,
    shipping: 0,
    discount: 0,
    total: 0
  };

  const [activeVoucher, setActiveVoucher] = useState<IVoucher>();
  const [values, setValues] = useState<IValues>(emptyValues);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    calculatePrices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsInCart, activeVoucher]);

  function calculatePrices() {
    let value = emptyValues;
    let kgQuantity = 0;

    productsInCart.forEach((product: IProduct) => {
      value.subtotal += product.inCart * product.price;
      kgQuantity += product.inCart;
    });

    if (value.subtotal > 400) value.shipping = 0;
    else if (kgQuantity <= 10 && kgQuantity > 0) value.shipping = 30;
    else if (kgQuantity > 10) value.shipping = 30 + Math.floor((kgQuantity - 10) / 5) * 7;

    if (activeVoucher) {
      if (activeVoucher.type === 'percentual') value.discount = (value.subtotal * activeVoucher.amount) / 100;
      else if (activeVoucher.type === 'fixed') value.discount = activeVoucher.amount;
      else if (activeVoucher.type === 'shipping' && value.subtotal >= activeVoucher.minValue) value.shipping = 0;
    }

    if (value.discount > value.subtotal) value.discount = value.subtotal;
    value.total = value.subtotal + value.shipping - value.discount;
    setValues(value);
  }

  function applyDiscountCode(voucher: IVoucher) {
    setActiveVoucher(voucher);
  }

  return (
    <div className="lg:pl-16 flex flex-col w-7/8 lg:w-3/4">
      <div className="p-2 text-xl lg:text-2xl text-center font-bold bg-orange-500 text-orange-900 rounded-t-lg">
        Shopping Cart
      </div>
      {productsInCart &&
        productsInCart.map((product: IProduct, index: number) => {
          return <ProductInCart key={index} product={product} updateProductQuantity={props.updateProductQuantity} />;
        })}
      <DiscountForm vouchers={vouchers} applyDiscountCode={applyDiscountCode} />
      <CartValues name={'Subtotal'} value={values.subtotal} total={false} />
      <CartValues name={'Shipping'} value={values.shipping} total={false} />
      <CartValues name={'Discount'} value={values.discount} total={false} />
      <CartValues name={'Total'} value={values.total} total={true} />
      <div className="flex justify-center">
        <button
          className="mt-6 mb-16 lg:mt-6 lg:mb-0 py-3 lg:py-4 bg-orange-900 text-orange-100 font-bold text-base lg:text-lg 
        rounded-lg focus:outline-none lg:hover:bg-orange-500 lg:hover:text-orange-900 w-3/5 lg:w-full"
          onClick={() => setShowModal(true)}
        >
          CHECKOUT
        </button>
      </div>

      {showModal ? <PaymentModal setShowModal={setShowModal} totalValue={values.total} /> : null}
    </div>
  );
};

export default ShoppingCart;
