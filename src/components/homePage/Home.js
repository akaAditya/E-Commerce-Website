import React from "react";
import { useState } from "react";
import Cart from "../cart/Cart";
import NavBar from "../navbar/Navbar";
import Section1 from "../main/Section1";
import CartProvider from "../../store/CartProvider";
import Footer from "../footer/Footer";

const Home = () => {
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
          <Section1 />
          {/* <Products/> */}
          <Footer />
        </CartProvider>
      </React.Fragment>
    );
  };

export default Home;
