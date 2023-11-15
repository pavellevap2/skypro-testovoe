import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from '../header/Header';
import MainPage from '../../pages/main';
import CartPage from '../../pages/cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
