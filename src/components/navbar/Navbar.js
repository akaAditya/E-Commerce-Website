import React from "react";
// import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import CartContext from "../../cartStore/cart-context";
import { Link } from "react-router-dom";

function NavBar() {
  // const cartContext = useContext(CartContext);

  // const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);
  return (
    <Navbar
      className="navbar navbar-inverse navbar-fixed-top"
      bg="dark"
      expand="sm"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">JustSell</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              Home
            </Link>

            <Link
              to="/store"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              Store
            </Link>
            <Link
              to="/about"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              About
            </Link>
            <Link
              to="/contact-us"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              Contact-US
            </Link>
            <Link
              to="/auth"
              style={{
                color: "yellowgreen",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              Log In
            </Link>
          </Nav>
          <Link
            to="/cart"
            style={{
              color: "Yellow",
              textDecoration: "none",
              paddingRight: "10px",
            }}
          >
            Cart
          </Link>
          {/* <span style={{ color: "white" }}>Q : {numberOfCartItems}</span> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
