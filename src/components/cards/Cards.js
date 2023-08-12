import React from "react";
import { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardItemForm from "./CardItemForm";
import CartContext from "../../store/cart-context";

const Cards = (props) => {
  const cartContext = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartContext.addItems({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <React.Fragment>
      <Container className="d-flex justify-content-sm-between">
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
    </React.Fragment>
  );
};

export default Cards;
