import { useNavigate } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-title">Интерьер.</div>
      <div className="header-nav">
        <div onClick={() => navigate('/')} className="header-nav-item">
          Каталог
        </div>
        <div onClick={() => navigate('/cart')} className="header-nav-item">
          Корзина
        </div>
      </div>
    </header>
  );
};

export default Header;
