const express = require('express');
const bkash = require('./bkash');
const bkashController = express.Router();

// Create a Payment
bkashController.post('/create', async (req, res) => {
  try {
    const paymentInfo = req.body;
    // ... validation and data preparation

    // Call bKash createPayment method
    const result = await bkash.createPayment(paymentInfo);

    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

// Execute a Payment
bkashController.post('/execute', async (req, res) => {
  try {
    const { paymentID } = req.body;

    // Call bKash executePayment method
    const result = await bkash.executePayment(paymentID);

    return res.json(result);
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

// Query Payment
bkashController.get('/query/:paymentID', async (req, res) => {
  try {
    const paymentID = req.params.paymentID;

    // Call bKash queryPayment method
    const result = await bkash.queryPayment(paymentID);

    return res.json({ success: true, data: result });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

// Refund a Payment
bkashController.post('/refund', async (req, res) => {
  try {
    const { paymentID, amount, trxID, sku } = req.body;
    // ... validation and data preparation

    // Call bKash refundTransaction method
    const result = await bkash.refundTransaction({ paymentID, amount, trxID, sku });

    return res.status(201).json({ success: true, data: result });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = { bkashController };
