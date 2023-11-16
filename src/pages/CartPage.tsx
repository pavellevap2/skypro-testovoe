import { FC, useEffect, useMemo, useState } from 'react';
import { ICart } from '../types/cart';
import Cart from '../components/cart/Cart';
import { CATALOGUE_DATA } from '../data/catalogue-data';
import { IProduct } from '../types/product';

interface ICheckin {
  [key: number]: number;
}

const CartPage: FC<ICart> = ({ selectedItemsIds }) => {
  const [checkin, setCheckin] = useState<ICheckin>({});

  const productItems: IProduct[] = useMemo(() => {
    const products = [];

    for (const product of CATALOGUE_DATA) {
      if (selectedItemsIds.includes(product.id)) {
        products.push(product);
      }
    }

    return products;
  }, [selectedItemsIds]);

  useEffect(() => {
    const checkinState: ICheckin = {};

    for (const product of CATALOGUE_DATA) {
      if (selectedItemsIds.includes(product.id)) {
        checkinState[product.id] = product.min;
      }
    }

    setCheckin(checkinState);
  }, [selectedItemsIds]);

  const addToCart = (id: number, value: number) => {
    setCheckin((prev) => ({ ...prev, [id]: value }));
  };

  const finalPrice = useMemo(() => {
    let total = 0;

    for (const product of CATALOGUE_DATA) {
      if (checkin[product.id]) {
        const count = checkin[product.id];
        total += count * product.price;
      }
    }

    return total;
  }, [checkin]);

  return (
    <main>
      <Cart
        finalPrice={finalPrice}
        addToCart={addToCart}
        checkin={checkin}
        products={productItems}
      />
    </main>
  );
};

export default CartPage;
