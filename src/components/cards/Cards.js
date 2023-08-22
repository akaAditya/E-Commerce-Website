import React from "react";
import { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardItemForm from "./CardItemForm";
// import CartContext from "../../cartStore/cart-context";
import AuthContext from "../../authContext/auth-context";

const Cards = (props) => {
  // const cartContext = useContext(CartContext);
  const authContext = useContext(AuthContext);
  const email = authContext.email;
  const removeAt = email.replace("@", "");
  const removeDot = removeAt.replace(".", "");
  const finalEmail = removeDot;
  const addToCartHandler = (amount) => {
    fetch(
      `https://crudcrud.com/api/86faae61f8894cde8d201df788e91e17/cartItems${finalEmail}`,
      {
        method: "POST",
        body: JSON.stringify({
          id: props.id,
          name: props.name,
          email: finalEmail,
          amount: amount,
          image: props.image,
          price: props.price,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // .then((res) => res.json())
    // .then((json) => {
    //   cartContext.addItem(json);
    // });
  };

  return (
    <React.Fragment>
      <Container className="d-flex justify-content sm-between">
        <Container className=" ">
          <Container className="mt-4">
            <Row>
              <Col md={6} xs={4}>
                <Card style={{ width: "18rem" }} className="shadow-lg p-4">
                  <Card.Body>
                    <Card.Img src={props.image} />
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.price}</Card.Text>
                  </Card.Body>
                  <CardItemForm id={props.id} onAddToCart={addToCartHandler} />
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default Cards;
