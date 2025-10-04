import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/slices/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  

  // Check based on id + category
  const isInCart = cartItems.some(item => item.id === product.id && item.category === product.category);

  const handleCartAction = () => {
    if (isInCart) {
      dispatch(removeFromCart({ id: product.id, category: product.category }));
    } else {
      dispatch(addToCart(product));
    }
    
  };

  return (
    <div className="border rounded p-4 flex flex-col">
      <img src={`${import.meta.env.VITE_API_URL.replace('/api/products','')}${product.image}`} alt={product.name} className="mb-4" width="309" height="400" />

      <h3 className="font-semibold mb-2">{product.name}</h3>
      <p className="text-lg mb-1">₹{product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mb-4 capitalize">{product.category || 'Uncategorized'}</p>
      <button
        onClick={handleCartAction}
        className={`py-2 rounded text-white ${isInCart ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
