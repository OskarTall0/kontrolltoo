import { createContext, useReducer } from 'react';

export const CartContext = createContext({
  items: [],
  addItem: () => {}
});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existing = state.items.find(i => i.id === action.item.id);

    if (existing) {
      return {
        items: state.items.map(i =>
          i.id === action.item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      };
    }
    return {
      items: [...state.items, { ...action.item, quantity: 1 }]
    };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatch({ type: 'ADD_ITEM', item });
  }

  return (
    <CartContext.Provider value={{ items: cartState.items, addItem }}>
      {children}
    </CartContext.Provider>
  );
}