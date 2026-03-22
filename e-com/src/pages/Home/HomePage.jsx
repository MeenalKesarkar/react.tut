import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';

export function HomePage({ cart, setCart }) {   // ✅ receive setCart

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      try {
        const response = await axios.get('/api/products');  // ✅ Vercel API
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">

        <ProductsGrid 
          products={products} 
          cart={cart}           // ✅ pass cart
          setCart={setCart}     // ✅ pass setCart
        />

      </div>
    </>
  );
}