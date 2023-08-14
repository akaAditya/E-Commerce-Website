import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const cartItemAddHandler = (item) => {
    cartContext.addItems({ ...item, amount: 1 });
  };
  const cartItems = (
    <Container className="d-flex justify-content-sm-between mt-5">
      {cartContext.items.map((item) => {
        return (
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Img src={item.image} style={{width:'40px', height: '40px', }}/>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                  <Card.Text>{item.amount}</Card.Text>
                  {/* <Button onClick={cartItemAddHandler.bind(null, item.id)}>
                    +
                  </Button> */}
                  <button onClick={cartItemAddHandler.bind(null, item.id)}>
                    +
                  </button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      })}
    </Container>
  );

  return (
    <Modal onHide={props.onHide}>
      <Container>
        <Card>
          <Card.Body>
            <Card.Text>{cartItems}</Card.Text>
            <Card.Text>Total Amount</Card.Text>
            <Card.Text>{totalAmount}</Card.Text>
          </Card.Body>
        </Card>
      </Container>

      {/* <span>Total Amount</span>
      <span>{totalAmount}</span> */}
      <Button onClick={props.onHide}>Close</Button>
    </Modal>
  );
};

export default Cart;
