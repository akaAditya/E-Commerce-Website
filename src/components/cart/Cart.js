import React, { useContext, useEffect } from "react";
import CartContext from "../../cartStore/cart-context";
import AuthContext from "../../authContext/auth-context";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const authContext = useContext(AuthContext);
  const email = authContext.email;
  const removeAt = email.replace("@", "");
  const removeDot = removeAt.replace(".", "");
  const finalEmail = removeDot;
  console.log(finalEmail, "Email from cart");

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  useEffect(() => {
    fetch(
      `https://crudcrud.com/api/86faae61f8894cde8d201df788e91e17/cartItems${finalEmail}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        cartContext.addItem(json);
      });
  }, []);

  return (
    <div>
      <h2 style={{ marginLeft: "45%" }}>My Cart</h2>
      <div className="container d-flex">
        {cartContext.items.map((item) => (
          <div
            className="card"
            style={{ width: "10rem", margin: "1rem" }}
            key={item.id}
          >
            <img src={item.image} className="card-img-top" alt="product" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.price}</p>
              <p className="card-text">{item.amount}</p>

              <button
                className="btn btn-sm btn-danger"
                onClick={removeCartItemHandler.bind(null, item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
