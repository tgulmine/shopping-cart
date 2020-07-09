import React from 'react';

interface PaymentModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  totalValue: number;
}

const PaymentModal: React.FC<PaymentModalProps> = props => {
  const { setShowModal } = props;
  const { totalValue } = props;

  const canBuy = totalValue > 0 ? true : false;

  const textCanBuy = {
    title: 'Payment Successful!',
    button: 'NICE'
  };
  const textCantBuy = {
    title: 'Your cart is empty.',
    button: 'OK'
  };

  const modalText = canBuy ? textCanBuy : textCantBuy;

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div
      className="w-full h-full absolute flex justify-center items-center bg-darken-4 bg-black"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#0000009a'
      }}
    >
      <div className="py-4 px-16 bg-orange-500 flex flex-col items-center rounded-lg shadow-lg">
        <div className="text-center font-bold text-2xl text-orange-900">{modalText.title}</div>
        <button
          className="mt-6 py-2 px-8 bg-orange-900 text-orange-100 font-bold text-lg 
        rounded-lg focus:outline-none hover:bg-orange-200 hover:text-orange-900"
          onClick={() => closeModal()}
        >
          {modalText.button}
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
