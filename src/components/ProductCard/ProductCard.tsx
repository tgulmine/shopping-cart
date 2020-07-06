import * as React from 'react';

interface IProduct {
  id: number;
  name: string;
  price: number;
  available: number;
}

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = props => {
  const { product } = props;

  function clickBuy() {
    console.log('buy', product);
  }

  return (
    <div className="w-40 flex flex-col ml-10 mb-10">
      <div className="h-24 bg-orange-500 rounded-t-lg" />
      <div className="p-4 flex flex-col bg-orange-200">
        <div className="font-bold text-orange-900 text-base">{product.name}</div>
        <div className="font-normal text-orange-700 text-base">
          $ {product.price},00 - {product.available} left
        </div>
      </div>
      <button
        className="py-2 bg-orange-900 text-orange-100 font-bold text-base rounded-b-lg focus:outline-none hover:bg-orange-500 hover:text-orange-900"
        onClick={() => clickBuy()}
      >
        BUY
      </button>
    </div>
  );
};

export default ProductCard;
