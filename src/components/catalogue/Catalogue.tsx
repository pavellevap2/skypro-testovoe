import { FC } from 'react';
import './Catalogue.scss';
import { IProduct } from '../../types/product';

interface Props {
  selectItem: (id: number) => void;
  products: IProduct[];
}

const Catalogue: FC<Props> = ({ selectItem, products }) => {
  return (
    <div className="catalogue">
      {products.map((item) => {
        const price = new Intl.NumberFormat('ru-RU').format(item.price);

        return (
          <div key={item.id} className="catalogue-item">
            <div
              onClick={() => selectItem(item.id)}
              className="catalogue-item-background"
              style={{ backgroundImage: `url(${item.pictureUrl})` }}
            />
            <div className="catalogue-item-text">{item.title}</div>
            <div className="catalogue-item-description">{item.description}</div>
            <div className="catalogue-item-price">{`${price} руб.`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Catalogue;
