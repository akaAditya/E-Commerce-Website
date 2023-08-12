import React from "react";
import { useReducer } from "react";
import CartContext from "./cart-context";

const initialValue = {
  items: [],
  totalAmount: 0,
};

const ReducerFunc = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItemsInCart = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingItemsInCart) {
      const updatedItem = {
        ...existingItemsInCart,
        amount: existingItemsInCart.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  return initialValue;
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(ReducerFunc, initialValue);

  const addItemToCart = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemToCart,
    removeItems: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
