import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartContext from "../../store/cart-context";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  const cartContext = useContext(CartContext);
  console.log(cartContext.items);
  const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <Navbar className="fixed-top" bg="dark" expand="sm" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">JustSell</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/store"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              Store
            </NavLink>
            <NavLink
              to="/about"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              About
            </NavLink>
          </Nav>
          <Button onClick={props.onShow} variant="outline-success">
            Cart
          </Button>
          <span style={{ color: "white" }}>{numberOfCartItems}</span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
