import React from "react";
import { useState } from "react";
import Cart from "../cart/Cart";
import NavBar from "../navbar/Navbar";
import Section from "../main/Section";
import CartProvider from "../../store/CartProvider";
import Footer from "../footer/Footer";

const Store = () => {
  const [isItemShow, setIsItemShow] = useState(false);

  const showCartItemHandler = () => {
    setIsItemShow(true);
  };

  const hideCartItemHandler = () => {
    setIsItemShow(false);
  }
    return (
      <React.Fragment>
        <CartProvider>
          {isItemShow && <Cart onHide={hideCartItemHandler} />}
          <NavBar onShow={showCartItemHandler} />
          <Section />
          {/* <Products/> */}
          <Footer />
        </CartProvider>
      </React.Fragment>
    );
  };

export default Store;
