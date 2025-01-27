import React, { useState } from 'react';
import axios from 'axios';

const DiscountCodePopup = ({ onClose, productId }) => {
  const [isCodeRevealed, setIsCodeRevealed] = useState(false);
  const [discountCode, setDiscountCode] = useState('');

    const loadTheCode = async () => {
        try {
            
            const response = await axios.get(`http://localhost:5000/api/v1/discounts/products/coupon/${productId}`);
            const data = await response.json();
            console.log(data);
            
            setIsCodeRevealed(true);
        } catch (error) {
            console.log(error);
        }
    };


  return (
    <div className="popup-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="popup-container bg-white w-max max-w-2xl rounded-16 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-700 hover:text-gray-900 cursor-pointer"
        >
            Close
        </button>
        
        <div className="p-8">
          <div className="text-center p-8">
            <h3 className="text-2xl font-bold mb-4">Special Discount Code</h3>
            <p className="text-gray-600 mb-6">
              Use this discount code to get amazing savings on your purchase!
            </p>
            
            <div className="bg-color-one p-6 rounded-8 mb-6">
              {isCodeRevealed ? (
                <div className="flex items-center justify-center gap-4">
                  {/* <span className="text-xl font-bold text-main-600 mr-10">{discountCode}</span> */}
                  <button
                    onClick={() => navigator.clipboard.writeText(discountCode)}
                    className="btn btn-main-two rounded-pill"
                >
                    {discountCode}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-22 h-22 ml-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 15.75v-9a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0120.25 6.75v9a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 8.25h-7.5a2.25 2.25 0 00-2.25 2.25v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25z"
                        />
                    </svg>
                </button>


                </div>
              ) : (
                <div className="flex justify-center">
                  <button 
                    onClick={loadTheCode}
                    className="btn btn-main rounded-pill"
                  >
                    Reveal Discount Code
                  </button>
                </div>
              )}
            </div>
            
            <p className="text-sm text-gray-500">
              *Terms and conditions apply. Limited time offer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DiscountCodePopup;