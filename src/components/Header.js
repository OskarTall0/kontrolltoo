import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import { useContext } from 'react';
import { CartContext } from '../store/CartContext';

const Header = () => {
  const cartCtx = useContext(CartContext);
  console.log('cart items', cartCtx);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1>React Food Order App</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({cartCtx.items.length})</Button>
      </nav>
    </header>
  );
};

export default Header;