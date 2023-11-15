import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">Интерьер.</div>
      <div className="header-nav">
        <div className="header-nav-item">Каталог</div>
        <div className="header-nav-item">Корзина</div>
      </div>
    </header>
  );
};

export default Header;
