import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  //  Get cart items from Redux
  const cartItems = useSelector(state => state.cart.items);

  //  Calculate total items (sum of all quantities)
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">TaM Shop</Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-4">
              <Link to="/men" className="text-gray-700 hover:text-gray-900">Men</Link>
              <Link to="/women" className="text-gray-700 hover:text-gray-900">Women</Link>
              <Link to="/accessories" className="text-gray-700 hover:text-gray-900">Accessories</Link>

              {/*  Cart with badge */}
              <Link to="/cart" className="relative text-gray-700 hover:text-gray-900">
                Cart
                {cartCount > 0 && (
                  <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" 
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d={isOpen ? "M6 18L18 6M6 6l12 12" 
                              : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 shadow-md">
          <Link to="/men" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Men</Link>
          <Link to="/women" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Women</Link>
          <Link to="/accessories" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Accessories</Link>

          {/* Cart with badge in mobile */}
          <Link to="/cart" className="relative block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-1 left-12 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
