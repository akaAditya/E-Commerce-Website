import React, { useState } from "react";
import NavBar from "./components/navbar/Navbar";
import Section1 from "./components/main/Section1";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isItemShow, setIsItemShow] = useState(false);

  const showCartItemHandler = () => {
    setIsItemShow(true);
  };

  const hideCartItemHandler = () => {
    setIsItemShow(false);
  };
  return (
    <CartProvider>
      {isItemShow && <Cart onHide={hideCartItemHandler} />}
      <NavBar onShow={showCartItemHandler} />
      <Section1 />
    </CartProvider>
  );
}

export default App;
