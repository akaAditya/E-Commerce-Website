import React from "react";
import Cards from "../cards/Cards";
import UICard from "../UI/UICard";
import { Card } from "react-bootstrap";

const productsArr = [
  {
    id: "0",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "1",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "2",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "3",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Products = () => {
  return (
    <div>
      <UICard>
        <Card.Body>
          {productsArr.map((product) => (
            <Cards
              key={product.id}
              id={product.id}
              name={product.title}
              price={product.price}
              image={product.imageUrl}
            />
          ))}
        </Card.Body>
      </UICard>
    </div>
  );
};

export default Products;
