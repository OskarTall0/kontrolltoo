import { useState } from 'react';
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import Modal from "./components/UI/Modal";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartContextProvider>
      <Modal open={cartOpen}>
        <p>Test</p>
      </Modal>
      <Header onCartClick={() => setCartOpen(true)} />
      <Meals />
    </CartContextProvider>
  );
}

export default App;