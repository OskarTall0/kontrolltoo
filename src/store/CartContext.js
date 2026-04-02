import { createContext, useState } from 'react';

export const CartContext = createContext({
  items: [],
  addItem: () => {}
});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addItem(item) {
    setCartItems(prev => [...prev, item]);
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addItem }}>
      {children}
    </CartContext.Provider>
  );
}