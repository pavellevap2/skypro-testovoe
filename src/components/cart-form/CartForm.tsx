import { FC } from 'react';
import './CartForm.scss';

interface Props {
  finalPrice: number;
}

const CartForm: FC<Props> = ({ finalPrice }) => {
  const price = new Intl.NumberFormat('ru-RU').format(finalPrice);

  return (
    <div className="cart-form-container">
      <div className="cart-form-title">Оформление заказа</div>
      <div className="cart-input-wrapper">
        <input placeholder="Имя Фамилия" name="name" />
        <input placeholder="+ 7 904 000 80 80" name="phone" />
        <input placeholder="Адрес доставки" name="address" />
      </div>
      <div className="cart-form-price">
        Итого: <span>{`${price} руб.`}</span>
      </div>
    </div>
  );
};

export default CartForm;
