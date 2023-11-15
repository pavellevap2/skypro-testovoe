import { FC } from 'react';
import './CatalogueSelect.scss';

interface IProps {
  sorting: 'asc' | 'desc' | 'default';
  sortProducts: (sorting: 'asc' | 'desc' | 'default') => void;
}

const CatalogueSelect: FC<IProps> = ({ sorting, sortProducts }) => {
  return (
    <div className="select-container">
      <select
        onChange={(e) => {
          console.log(e.target.value, 'first click');
          sortProducts(e.target.value as 'asc' | 'desc' | 'default');
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
