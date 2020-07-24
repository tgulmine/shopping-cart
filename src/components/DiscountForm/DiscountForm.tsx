import React, { useState } from 'react';
import { IVoucher } from '../../utils/interfaces';

interface DiscountFormProps {
  vouchers: IVoucher[];
  applyDiscountCode: (voucher: IVoucher) => void;
}

const DiscountForm: React.FC<DiscountFormProps> = props => {
  const [input, setInput] = useState('');
  const { vouchers } = props;

  function clickApply() {
    const voucher = vouchers.find(voucher => voucher.code === input);
    if (voucher) props.applyDiscountCode(voucher);
  }

  return (
    <div className="bg-orange-300 p-4 flex justify-between">
      <input
        className="shadow border border-orange-500 rounded-sm py-2 px-2 text-gray-700 text-sm leading-tight focus:outline-none"
        id="discountCode"
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
        type="text"
        placeholder="Discount code"
      />
      <button
        className="py-2 px-4 bg-orange-900 text-orange-100 font-bold text-sm 
        rounded-lg focus:outline-none lg:hover:bg-orange-500 lg:hover:text-orange-900"
        onClick={() => clickApply()}
      >
        APPLY
      </button>
    </div>
  );
};

export default DiscountForm;
