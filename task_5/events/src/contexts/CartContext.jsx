import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setItemAmount(cart.reduce((prev, curr) => prev + curr.amount, 0));
    setTotal(cart.reduce((prev, curr) => prev + curr.price * curr.amount, 0));
  }, [cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // new instance of product with added amount : 1
    const cartItem = cart.find((item) => item.id === id);
    // if product already in cart it will be true
    if (cartItem) {
      // if added product found already existing
      const newCart = cart.map((item) => {
        // map current cart array to make a new updated newCart array
        if (item.id === id) {
          // if existing product is being added again do the below:
          return { ...item, amount: cartItem.amount + 1 };
          // + 1 to amount of the added product
        } else {
          return item;
          // add unchanged products to the newCart array
        }
      });
      setCart(newCart);
      // set cart with new updated one
    } else {
      setCart([...cart, newItem]);
      // add new product to the cart
    }
  };

  const decreaseAmount = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      } else {
        return item;
      }
    });
    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
