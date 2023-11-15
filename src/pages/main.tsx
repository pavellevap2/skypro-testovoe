import { FC, useState } from 'react';
import Catalogue from '../components/catalogue/Catalogue';
import { ICart } from '../types/cart';
import { IProduct } from '../types/product';
import { CATALOGUE_DATA } from '../data/catalogue-data';

const MainPage: FC<ICart> = ({ selectItem }) => {
  const [products, setProducts] = useState<IProduct[]>(CATALOGUE_DATA);

  return (
    <main>
      <Catalogue products={products} selectItem={selectItem} />
    </main>
  );
};

export default MainPage;
