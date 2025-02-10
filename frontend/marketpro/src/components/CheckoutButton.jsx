import React from 'react';

const CheckoutButton = ({ amount, onClick }) => {
  return (
    <button 
      className="btn btn-success" 
      onClick={() => onClick(amount)}
    >
      Proceed to Pay ₹{amount}
    </button>
  );
};

export default CheckoutButton;