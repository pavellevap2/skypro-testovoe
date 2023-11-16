import { FC } from 'react';
import CartForm from '../cart-form/CartForm';
import './Cart.scss';
import { IProduct } from '../../types/product';

interface Props {
  products: IProduct[];
  checkin: {
    [key: number]: number;
  };
  addToCart: (id: number, value: number) => void;
  finalPrice: number;
}

const Cart: FC<Props> = ({ checkin, products, addToCart, finalPrice }) => {
  return (
    <div className="cart-container">
      <div className="cart-col">
        <div className="cart-head-row">
          <div>Товар</div>
          <div>К-во</div>
        </div>
        {products.map((product) => {
          const price = new Intl.NumberFormat('ru-RU').format(product.price);

          return (
            <div key={product.id} className="cart-item">
              <div className="cart-item-wrapper">
                <img alt="logo" src={product.pictureUrl} />
                <div className="cart-item-info">
                  <div className="cart-item-text">{product.title}</div>
                  <div className="cart-item-description">{product.description}</div>
                  <div className="cart-item-text">{`${price} руб.`}</div>
                </div>
              </div>
              <div className="cart-minmax">
                <input
                  onChange={(e) => {
                    addToCart(product.id, Number(e.target.value));
                  }}
                  value={checkin[product.id]}
                  type="number"
                  min={product.min}
                  max={product.max}
                />
              </div>
            </div>
          );
        })}
      </div>
      <CartForm finalPrice={finalPrice} />
    </div>
  );
};

export default Cart;
