import * as React from 'react';
import { IProduct } from '../../utils/interfaces';

interface ProductInCartProps {
  product: IProduct;
}

const ProductInCart: React.FC<ProductInCartProps> = props => {
  const { product } = props;

  return <div className="rs">{product.name}</div>;
};

export default ProductInCart;
