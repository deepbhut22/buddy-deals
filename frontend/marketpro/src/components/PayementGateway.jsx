import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import './PayementGateway.scss';
// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe('your_stripe_publishable_key');

// Initialize Razorpay
const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const PaymentGateway = ({ amount = 0 }) => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadRazorpay();
  }, []);

  const handleStripePayment = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    
    try {
      // Replace with your backend API endpoint
      const response = await axios.post('/api/create-payment-intent', {
        amount,
        payment_method: 'card'
      });

      const result = await stripe.confirmCardPayment(response.data.clientSecret, {
        payment_method: {
          card: {
            number: cardNumber,
            exp_month: expiryDate.split('/')[0],
            exp_year: expiryDate.split('/')[1],
            cvc: cvv,
          },
        },
      });

      if (result.error) {
        alert(result.error.message);
      } else {
        alert('Payment successful!');
      }
    } catch (error) {
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRazorpayPayment = async () => {
    setLoading(true);
    
    try {
      // Replace with your backend API endpoint
      const response = await axios.post('/api/create-razorpay-order', {
        amount
      });

      const options = {
        key: 'your_razorpay_key_id',
        amount: response.data.amount,
        currency: "INR",
        name: "Your Company Name",
        description: "Payment for Order",
        order_id: response.data.id,
        handler: function (response) {
          alert('Payment successful!');
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#4CAF50"
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUPIPayment = async () => {
    if (!upiId) {
      alert('Please enter UPI ID');
      return;
    }
    // Implement UPI payment logic here
    alert('UPI payment initiated');
  };

  const handleNetBankingPayment = () => {
    // Implement net banking payment logic here
    alert('Net Banking payment initiated');
  };

  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case 'card':
        return (
          <div className="payment-form">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>
            <button
              className="btn btn-pay w-100"
              onClick={handleStripePayment}
              disabled={loading}
            >
              {loading ? 'Processing...' : `Pay ₹${amount}`}
            </button>
          </div>
        );

      case 'upi':
        return (
          <div className="payment-form">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            </div>
            <button
              className="btn btn-pay w-100"
              onClick={handleUPIPayment}
              disabled={loading}
            >
              {loading ? 'Processing...' : `Pay ₹${amount}`}
            </button>
          </div>
        );

      case 'netbanking':
        return (
          <div className="payment-form">
            <select className="form-select mb-3">
              <option value="">Select Bank</option>
              <option value="sbi">State Bank of India</option>
              <option value="hdfc">HDFC Bank</option>
              <option value="icici">ICICI Bank</option>
              <option value="axis">Axis Bank</option>
            </select>
            <button
              className="btn btn-pay w-100"
              onClick={handleNetBankingPayment}
              disabled={loading}
            >
              {loading ? 'Processing...' : `Pay ₹${amount}`}
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container py-5">
      <div className="payment-container">
        <h2 className="payment-header text-center mb-4">Select Payment Method</h2>
        <div className="payment-options">
          <div
            className={`payment-option ${selectedMethod === 'card' ? 'selected' : ''}`}
            onClick={() => setSelectedMethod('card')}
          >
            <h5>Credit / Debit Card</h5>
            <p className="mb-0">Pay securely using your card</p>
          </div>

          <div
            className={`payment-option ${selectedMethod === 'upi' ? 'selected' : ''}`}
            onClick={() => setSelectedMethod('upi')}
          >
            <h5>UPI Payment</h5>
            <p className="mb-0">Pay using UPI</p>
          </div>

          <div
            className={`payment-option ${selectedMethod === 'netbanking' ? 'selected' : ''}`}
            onClick={() => setSelectedMethod('netbanking')}
          >
            <h5>Net Banking</h5>
            <p className="mb-0">Pay using Net Banking</p>
          </div>
        </div>

        {renderPaymentForm()}
      </div>
    </div>
  );
};

export default PaymentGateway;