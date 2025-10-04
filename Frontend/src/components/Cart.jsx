import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!cart.items.length) return <p className="p-4 pt-20">Your cart is empty.</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cart.items.map(item => (
          <div key={item.id} className="flex items-center border rounded p-4">
            <img
              src={`http://localhost:5000${item.image}`}
              alt={item.name}
              className="h-20 w-20 object-cover object-top mr-4"
            />
            <div className="flex-grow">
              <h3 className="font-semibold">{item.name}</h3>
              <p>₹{item.price.toFixed(2)}</p>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  onClick={() => dispatch(decrementQuantity({ id: item.id }))}
                  className="border px-2 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(incrementQuantity({ id: item.id }))}
                  className="border px-2 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                  className="ml-4 p-1 rounded text-white bg-red-500 hover:bg-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <p className="text-lg">Subtotal: ₹{totalPrice.toFixed(2)}</p>
        <p className="text-lg">
          Delivery Charges: <span className="line-through">₹40</span>{' '}
          <span className="text-green-600">Free</span>
        </p>
        <p className="text-xl font-bold">Total: ₹{totalPrice.toFixed(2)}</p>
        <button
          onClick={() => navigate('/checkout')}
          className="mt-4 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
