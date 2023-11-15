import { CATALOGUE_DATA } from '../../data/catalogue-data';
import './Catalogue.scss';

const Catalogue = () => {
  return (
    <main className="catalogue">
      {CATALOGUE_DATA.map((item) => (
        <div key={item.id} className="catalogue-item">
          <div
            className="catalogue-item-background"
            style={{ backgroundImage: `url(${item.pictureUrl})` }}
          />
        </div>
      ))}
    </main>
  );
};

export default Catalogue;
