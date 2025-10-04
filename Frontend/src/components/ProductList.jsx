import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, error, loading }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!products.length) return <p>No products found.</p>;

  // Extract unique categories (ignoring undefined/null)
  const categories = Array.from(
    new Set(products.map(p => p.category).filter(Boolean))
  );

  // Filter products based on selectedCategory
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex gap-2 mb-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
