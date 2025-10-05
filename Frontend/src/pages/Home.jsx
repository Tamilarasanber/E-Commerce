import React from 'react';
import {Link} from 'react-router-dom'
import Hero from '../components/Hero';

// Demo thumbnail data, can be replaced with images/icons if needed
const thumbnails = [
  { label: 'Men', href: '/men', bg: 'bg-blue-100', icons: ' 👨' },
  { label: 'Women', href: '/women', bg: 'bg-pink-100', icons: '👗' },
  { label: 'Accessories', href: '/accessories', bg: 'bg-green-100', icons: " 👜" },
];

const Home = () => {
  return (
    <div>
       <Hero />
      {/* Thumbnail Section */}
      <section id="products" className="max-w-7xl mx-auto p-4 mb-8 mt-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {thumbnails.map((thumb) => (
           
            
            <Link to= {thumb.href} className={`flex flex-col items-center justify-center h-32 rounded-lg shadow-md hover:shadow-xl transition border ${thumb.bg}`} key={thumb.label}>
              {/* Example icon placeholder */}
              <span className="text-4xl mb-2">{thumb.icons}</span>
              <span className="text-xl font-semibold">{thumb.label}</span>
            </Link>
            
          ))}
        </div>
      </section>

     
    
    </div>
  );
};

export default Home;
