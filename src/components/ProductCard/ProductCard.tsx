import React, { useState } from 'react';
import { IProduct } from '../../utils/interfaces';

interface ProductCardProps {
  product: IProduct;
  addOrRemoveProduct: (product: IProduct) => void;
}

const ProductCard: React.FC<ProductCardProps> = props => {
  const { product } = props;
  const [isActiveBuy, setIsActiveBuy] = useState(true);

  function clickBuy() {
    props.addOrRemoveProduct(product);
    setIsActiveBuy(!isActiveBuy);
  }

  return (
    <div className="w-32 lg:w-40 flex flex-col lg:ml-10 mb-8 lg:mb-10">
      <div className="h-16 lg:h-24 bg-orange-500 rounded-t-lg" />
      <div className="p-3 lg:p-4 pt-2 lg:pt-3 flex flex-col bg-orange-200">
        <div className="pb-1 font-bold text-orange-900 text-sm">{product.name}</div>
        <div className="font-normal text-orange-700 text-sm">
          $ {product.price},00 • {product.available - product.inCart} left
        </div>
      </div>
      <button
        className="py-2 bg-orange-900 text-orange-100 font-bold text-sm rounded-b-lg 
        focus:outline-none lg:hover:bg-orange-500 lg:hover:text-orange-900"
        onClick={() => clickBuy()}
      >
        {isActiveBuy ? 'BUY' : 'REMOVE'}
      </button>
    </div>
  );
};

export default ProductCard;
