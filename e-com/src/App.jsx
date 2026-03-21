import axios from 'axios';
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() =>{
    axios.get('/api/cart-items?expand=product')
        .then((response) => {
            console.log(response.data);
    })
}, []);
  
   return (
      <Routes> 
        <Route index element={<HomePage cart={cart}/>} />
        <Route path="checkout" element={<CheckoutPage cart={cart}/>} />
        <Route path="orders" element={<OrdersPage />} />

      </Routes>
  )
}

export default App
