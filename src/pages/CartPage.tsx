import { FC, useState } from 'react';
import { ICart } from '../types/cart';
import Cart from '../components/cart/Cart';

const CartPage: FC<ICart> = ({ selectedItemsIds }) => {
  const [checkin, setCheckin] = useState({});

  return (
    <main>
      <Cart />
    </main>
  );
};

export default CartPage;
