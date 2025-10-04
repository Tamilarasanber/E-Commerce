import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <svg
        className="w-24 h-24 text-green-500 mb-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      <p className="mb-6">Thank you for your purchase.</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Success;
