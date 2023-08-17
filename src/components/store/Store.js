import React from "react";
import Section from "../main/Section";
import CartProvider from "../../store/CartProvider";
import Footer from "../footer/Footer";

const Store = () => {

    return (
      <React.Fragment>
        <CartProvider>
          <Section />
          {/* <Products/> */}
          <Footer />
        </CartProvider>
      </React.Fragment>
    );
  };

export default Store;
