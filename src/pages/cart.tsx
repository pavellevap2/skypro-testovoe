import { FC } from 'react';
import { ICart } from '../types/cart';
import CartForm from '../components/cart-form/CartForm';

const CartPage: FC<ICart> = () => {
  return (
    <div>
      <CartForm />
    </div>
  );
};

export default CartPage;
