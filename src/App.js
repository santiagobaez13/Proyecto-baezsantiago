import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

function App() {
  console.log('Rendering App...');

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <div className="container mt-4"> 
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<Navigate to='/' />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
          </div>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;