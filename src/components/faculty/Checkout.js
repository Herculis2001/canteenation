import React, { useState } from 'react';
import BkashPayment from './BkashPayment';

const Checkout = () => {
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePaymentSuccess = (data) => {
    // Handle successful payment, update paymentStatus, etc.
    setPaymentStatus('Payment successful');
  };

  return (
    <div>
      {/* Other checkout components */}
      <BkashPayment totalAmount={1000} onPaymentSuccess={handlePaymentSuccess} />
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default Checkout;
