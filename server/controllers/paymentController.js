import Payment from "../models/payment.js";
import Razorpay from "razorpay"
// Initialize Razorpay client
const razorpay = new Razorpay({
    key_id: 'rzp_test_ORvlmqZj7nMYIb',
    key_secret: '7CIwajHSAVxPbfIQoFFlGRvm',
  });
// Create a payment
const createPayment = async (req, res) => {
  try {
    const { amount, currency, receipt } = req.body;

    const options = {
      amount: amount * 10, // Amount in the smallest currency unit (paise for INR)
      currency: currency,
      receipt: receipt,
      payment_capture: 1, // 1 to capture the payment immediately, 0 to authorize only
    };

    const order = await razorpay.orders.create(options);

    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create payment" });
  }
};

// Verify the payment
const verifyPayment = async (req, res) => {
  try {
    const { paymentId, orderId, signature } = req.body;

    const generatedSignature = razorpay.utils.generateSignature(
      `${orderId}|${paymentId}`,
      process.env.RAZORPAY_KEY_SECRET
    );

    if (generatedSignature === signature) {
      // Payment verification successful
      res.json({ success: true, message: "Payment verified successfully" });
    } else {
      // Payment verification failed
      res.status(400).json({ success: false, message: "Invalid payment signature" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to verify payment" });
  }
};

export { createPayment, verifyPayment };
