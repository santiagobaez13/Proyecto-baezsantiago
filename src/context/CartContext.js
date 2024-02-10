import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  total: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const calculateTotals = () => {
      const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
      const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

      setTotalQuantity(quantity);
      setTotal(totalPrice);
    };

    calculateTotals();
  }, [cart]);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const addItem = (item, quantity) => {
    const { id } = item;

    if (!isInCart(id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, totalQuantity, total, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};