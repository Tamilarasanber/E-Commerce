import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();

  const totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy payment logic
    navigate('/success');
  };

  if (!cart.items.length) return <p className="p-4 pt-20">Your cart is empty.</p>;

  return (
    <div className="max-w-xl mx-auto p-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="border p-4 rounded mb-6">
        <h2 className="font-semibold mb-2">Order Summary</h2>
        {cart.items.map(item => (
          <div key={`${item.id}-${item.category}`} className="flex justify-between mb-1">
            <span>{item.name} x {item.quantity}</span>
            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <hr className="my-2" />
        <div className="flex justify-between font-bold">
          <span>Subtotal</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Delivery Charges</span>
          <span>
            <span className="line-through">₹40</span> <span className="text-green-600">Free</span>
          </span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;
