import * as React from 'react';
import { IProduct } from '../../utils/interfaces';

interface ProductInCartProps {
  product: IProduct;
  updateProductQuantity: (product: IProduct, add: boolean) => void;
}

const ProductInCart: React.FC<ProductInCartProps> = props => {
  const { product } = props;

  return (
    <div className="bg-orange-300 p-4 pb-0 border-orange-400">
      <div className="rounded-lg border-orange-400 border-1 flex justify-between h-16">
        <div className="rounded bg-orange-400 w-16" />
        <div className="flex-grow flex flex-col border-top border-bottom px-2 py-1 justify-between">
          <div className="font-bold text-orange-900 text-base">{product.name}</div>
          <div className="flex justify-between font-normal text-orange-700 text-base">
            <div>Quantity: {product.inCart}</div>
            <div>$ {product.price * product.inCart},00</div>
          </div>
        </div>
        <div className="w-8 flex flex-col items-end border-orange-400 border-l-1 font-normal text-orange-700 text-base">
          <button
            className="h-8 w-full flex justify-center items-center border-orange-400 
            border-b-1 focus:outline-none hover:text-lg"
            onClick={() => props.updateProductQuantity(product, true)}
          >
            +
          </button>
          <button
            className="h-8 w-full flex justify-center items-center focus:outline-none hover:text-lg"
            onClick={() => props.updateProductQuantity(product, false)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
