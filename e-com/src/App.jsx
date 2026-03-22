import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import { HomePage } from './pages/Home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import './App.css';

function App() {

  const [cart, setCart] = useState([]);

  // ✅ Load cart from localStorage (on first load)
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // ✅ Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Routes>
      <Route 
        index 
        element={<HomePage cart={cart} setCart={setCart} />} 
      />

      <Route 
        path="checkout" 
        element={<CheckoutPage cart={cart} setCart={setCart} />} 
      />

      <Route 
        path="orders" 
        element={<OrdersPage cart={cart} />} 
      />
    </Routes>
  );
}

export default App;