export interface IProduct {
  id: number;
  name: string;
  price: number;
  available: number;
  inCart: number;
}

export interface IVoucher {
  id: number;
  code: string;
  type: string;
  amount: number;
  minValue: number;
}

export interface IValues {
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
}
