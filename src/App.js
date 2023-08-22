import React, { useContext } from "react";
import NavBar from "./components/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import About from "./components/aboutUs/About";
import Store from "./components/store/Store";
import Home from "./components/homePage/Home";
import ContactUs from "./components/contactUs/ContactUs";
import ProductDetails from "./components/main/ProductDetails";
import AuthPage from "./components/Auth/AuthPage";
import AuthContext from "./authContext/auth-context";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Cart from "./components/cart/Cart";
import CartProvider from "./cartStore/CartProvider";

// const AboutPageRouter = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/store", element: <Store /> },
//   { path: "/about", element: <About /> },
// ]);

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <React.Fragment>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route path="/cart">
            {authCtx.isLoggedIn && <Cart />}
            {!authCtx.isLoggedIn && <Redirect to="/auth" />}
          </Route>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/store" exact>
            {authCtx.isLoggedIn && <Store />}
            {!authCtx.isLoggedIn && <Redirect to="/auth" />}
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
