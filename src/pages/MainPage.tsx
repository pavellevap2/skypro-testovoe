import { FC, useState } from 'react';
import Catalogue from '../components/catalogue/Catalogue';
import { ICart } from '../types/cart';
import { IProduct, ProductSortType } from '../types/product';
import { CATALOGUE_DATA } from '../data/catalogue-data';
import CatalogueSelect from '../components/catalogue-select/CatalogueSelect';

const MainPage: FC<ICart> = ({ selectItem }) => {
  const [products, setProducts] = useState<IProduct[]>(CATALOGUE_DATA);
  const [sorting, setSorting] = useState<ProductSortType>('default');

  const sortProducts = (selectedSorting: ProductSortType) => {
    if (selectedSorting === 'desc') {
      const sorted = [...CATALOGUE_DATA]?.sort((a, b) => b.price - a.price);

      setProducts(sorted);
    } else if (selectedSorting === 'asc') {
      const sorted = [...CATALOGUE_DATA]?.sort((a, b) => a.price - b.price);

      setProducts(sorted);
    } else {
      setProducts(CATALOGUE_DATA);
    }

    setSorting(selectedSorting);
  };

  return (
    <main>
      <CatalogueSelect sorting={sorting} sortProducts={sortProducts} />
      <Catalogue products={products} selectItem={selectItem} />
    </main>
  );
};

export default MainPage;
