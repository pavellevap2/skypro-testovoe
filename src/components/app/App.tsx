import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from '../header/Header';
import MainPage from '../../pages/MainPage';
import CartPage from '../../pages/CartPage';

function App() {
  const [selectedItemsIds, selectItemIds] = useState<number[]>([]);

  const selectItem = (selectedId: number) => {
    if (selectedItemsIds?.includes(selectedId)) {
      const filtered = selectedItemsIds.filter((id) => selectedId === id);
      selectItemIds(filtered);
    } else {
      selectItemIds((prev) => [...prev, selectedId]);
    }
  };

  return (
    <div className="App">
      <div className="App-wrapper">
        <Header />
        <Routes>
          <Route
            element={
              <MainPage selectItem={selectItem} selectedItemsIds={selectedItemsIds} />
            }
            index
          />
          <Route
            path="/cart"
            element={
              <CartPage selectItem={selectItem} selectedItemsIds={selectedItemsIds} />
            }
          />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
