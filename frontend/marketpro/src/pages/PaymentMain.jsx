import React, { useState } from 'react';
import CheckoutButton from '../components/CheckoutButton';
import PaymentGateway from '../components/PayementGateway';
import 'bootstrap/dist/css/bootstrap.min.css';

function PaymentMain() {
  const [showPayment, setShowPayment] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleCheckout = (price) => {
    setAmount(price);
    setShowPayment(true);
  };

  return (
    <div className="App">
      {!showPayment ? (
        <div className="container py-5">
          <h1>Your Shopping Cart</h1>
          {/* Example product */}
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Product Name</h5>
              <p className="card-text">Price: ₹1000</p>
              <CheckoutButton amount={1000} onClick={handleCheckout} />
            </div>
          </div>
        </div>
      ) : (
        <PaymentGateway amount={amount} />
      )}
    </div>
  );
}

export default PaymentMain;