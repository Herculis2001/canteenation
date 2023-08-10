import React from 'react';
import { useBkash } from 'react-bkash';

const BkashPayment = ({ totalAmount, onPaymentSuccess }) => {
  const { error, loading, triggerBkash } = useBkash({
    // Configure your bKash settings here
    // ...
    amount: totalAmount,
    onSuccess: onPaymentSuccess,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <button onClick={triggerBkash}>Pay with bKash</button>
    </div>
  );
};

export default BkashPayment;
