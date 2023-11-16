import CartForm from '../cart-form/CartForm';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-item-row">
        <div>Товар</div>
        <div>К-во</div>
      </div>
      <CartForm />
    </div>
  );
};

export default Cart;
