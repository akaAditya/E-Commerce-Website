import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import Modal from "../UI/Modal";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];
const Cart = (props) => {
  const cartItems = (
    <Container>
      {cartElements.map((cartItems, index) => {
        return (
          <>
            <Card.Body>
              <div key={index}></div>
              <Card.Img src={cartItems.imageUrl} />
              <Card.Title>{cartItems.title}</Card.Title>
              <Card.Text>{cartItems.price}</Card.Text>
              <Card.Text>{cartItems.quantity}</Card.Text>
              {console.log(cartItems)}
              <Button>Remove</Button>
            </Card.Body>
          </>
        );
      })}
      </Container>
  );
  console.log(cartItems);

  return (
    <Modal onHide={props.onHide}>
      <Container className="mt-4">
        <Row>
          <Col md={6} xs={4}>
            <Card style={{ width: "18rem" }} className="shadow-lg p-4">
              {cartItems}
              <Button onClick={props.onHide}>Close</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
};

export default Cart;
