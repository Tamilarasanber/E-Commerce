import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

const Men = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productAPIMen = async()=> {
      try{
        const res = await fetch(`${import.meta.env.VITE_API_URL}/men`)
      if(!res.ok){
        throw new Error("response is not ok")
      }
      const data = await res.json();
      setProducts(data)
      }
      catch(err){
        setError(err.message)
      }
      finally {
        setLoading(false)
      }
      
    }
    productAPIMen();
    
     
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 pt-20">
      <h1 className="text-3xl font-bold mb-6 capitalize">Men</h1>
      <ProductList products={products} error={error} loading={loading}  />
    </div>
  );
};

export default Men;
