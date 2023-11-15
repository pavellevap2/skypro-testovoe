import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from '../header/Header';
import MainPage from '../../pages/main';
import CartPage from '../../pages/cart';

function App() {
  const [selectedItemsIds, selectItemIds] = useState<number[] | []>([]);

  return (
    <div className="App">
      <div className="App-wrapper">
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
