import { FC } from 'react';
import './CatalogueSelect.scss';
import { ProductSortType } from '../../types/product';

interface IProps {
  sorting: ProductSortType;
  sortProducts: (sorting: ProductSortType) => void;
}

const CatalogueSelect: FC<IProps> = ({ sorting, sortProducts }) => {
  return (
    <div className="select-container">
      <select
        onChange={(e) => {
          sortProducts(e.target.value as ProductSortType);
        }}
        value={sorting}
      >
        <option value="default">Порядок: по релеватности</option>
        <option value="asc">Порядок: сперва дешевле</option>
        <option value="desc">Порядок: сперва дороже</option>
      </select>
    </div>
  );
};

export default CatalogueSelect;
