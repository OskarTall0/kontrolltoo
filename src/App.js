import { useState, useContext } from 'react';
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider, CartContext } from "./store/CartContext";
import Modal from "./components/UI/Modal";
import Button from "./components/UI/Button";

function CartModal({ onClose }) {
  const cartCtx = useContext(CartContext);

  const totalPrice = cartCtx.items.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity, 0
  );

  const formattedTotal = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(totalPrice);

  function handleCheckout() {
    console.log('cart checkout is started');
    console.log('your items:', cartCtx.items);
    console.log('checkout is processed');
    cartCtx.clearCart();
    onClose();
    console.log('checkout is finished');
  }

  return (
    <>
      <h2>Your cart</h2>
      <ul>
        {cartCtx.items.map(item => (
          <li key={item.id} className="cart-item">
            <p>{item.name} - {item.quantity}</p>
          </li>
        ))}
      </ul>
      <p className="cart-total">{formattedTotal}</p>
      <p className="modal-actions">
        <Button textOnly onClick={onClose}>Close</Button>
        <Button onClick={handleCheckout}>Checkout</Button>
      </p>
    </>
  );
}

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartContextProvider>
      <Modal open={cartOpen}>
        <CartModal onClose={() => setCartOpen(false)} />
      </Modal>
      <Header onCartClick={() => setCartOpen(true)} />
      <Meals />
    </CartContextProvider>
  );
}

export default App;