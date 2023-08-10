import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const productsArr = [
  {
    id: 0,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 1,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 2,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 3,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Cards = () => {
  return (
    <React.Fragment>
<Container className="d-flex justify-content-sm-between">
      {productsArr.map((product) => {
        return (
    <Container className="mt-4">
          <Row>
            <Col md={6} xs={4}>
              <Card style={{ width: "18rem" }} className="shadow-lg p-4">
                <Card.Body>
                  <div key={product.id}>
                    <Card.Img variant="top" src={product.imageUrl} />
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Button>Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
    </Container>
        );
      })}
      </Container>
    </React.Fragment>
  );
};

export default Cards;
