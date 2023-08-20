import React from "react";
import NavBar from "./components/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import About from "./components/aboutUs/About";
import Store from "./components/store/Store";
import Home from "./components/homePage/Home";
import CartProvider from "./store/CartProvider";
import ContactUs from "./components/contactUs/ContactUs";
import ProductDetails from "./components/main/ProductDetails";
import AuthPage from "./components/Auth/AuthPage";

// const AboutPageRouter = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/store", element: <Store /> },
//   { path: "/about", element: <About /> },
// ]);

function App() {
  return (
    <React.Fragment>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route path='/auth'>
            <AuthPage />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/store" exact>
            <Store />
          </Route>
          <Route path={`/store/products-details/:productId/:info`}>
            <ProductDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </CartProvider>
    </React.Fragment>
  );
}

export default App;
