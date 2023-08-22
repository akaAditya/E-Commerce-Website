import React from "react";
import { Route, useParams } from "react-router-dom";
import ProductInfo from "../ProductInformation/ProductInfo";
import { NavLink } from "react-bootstrap";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import "./ProductDetails.css";

const ProductDetails = (props) => {
  const params = useParams();
  console.log(params.productId);
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100vh",
                    margin: "auto",
                  }}
                  className="rounded-4 fit"
                  src={image1}
                  alt="Mens-Tshirt"
                />
              </div>
              <div className="d-flex justify-content-center mb-3">
                <img
                  width="60"
                  height="60"
                  className="rounded-2"
                  src={image2}
                  alt="Mens-Tshirt"
                />
                <img
                  width="60"
                  height="60"
                  className="rounded-2"
                  src={image3}
                  alt="Mens-Tshirt"
                />
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">
                  Quality Men's Hoodie for Winter, Men's Fashion <br />
                  Casual Hoodie
                </h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span className="ms-1">4.5</span>
                  </div>
                  <span className="text-muted">
                    <i className="fas fa-shopping-basket fa-sm mx-1"></i>154
                    orders
                  </span>
                </div>

                <div className="mb-3">
                  <span className="h5">$75.00</span>
                  <span className="text-muted">/per box</span>
                </div>

                <p>
                  Modern look and quality demo item is a streetwear-inspired
                  collection that continues to break away from the conventions
                  of mainstream fashion. Made in Italy, these black and brown
                  clothing low-top shirts for men.
                </p>

                <div className="row">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-9">Regular</dd>

                  <dt className="col-3">Color</dt>
                  <dd className="col-9">Brown</dd>

                  <dt className="col-3">Material</dt>
                  <dd className="col-9">Cotton, Jeans</dd>

                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">Reebook</dd>
                </div>

                <hr />

                <div className="row mb-4">
                  <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select
                      className="form-select border border-secondary"
                      style={{ height: "35px" }}
                    >
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div
                      className="input-group mb-3"
                      style={{ width: "170px" }}
                    >
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        className="form-control text-center border border-secondary"
                        placeholder="14"
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <NavLink to="/" className="btn btn-warning shadow-0">
                  Buy now
                </NavLink>
                <NavLink to="/" className="btn btn-primary shadow-0">
                  <i className="me-1 fa fa-shopping-basket"></i> Add to cart
                </NavLink>
                <NavLink
                  to="/"
                  className="btn btn-light border border-secondary py-2 icon-hover px-3"
                >
                  <i className="me-1 fa fa-heart fa-lg"></i> Save
                </NavLink>
              </div>
            </main>
          </div>
        </div>
        <div className="container">
          <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
            <h4
              className="font-cond-l fg-accent lts-md mgb-10"
              contenteditable="false"
            >
              Not Yet Convinced?
            </h4>
            <h1
              className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg"
              contenteditable="false"
            >
              Read Customer Reviews
            </h1>
          </div>
          <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
            <li>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                className="wpx-100 img-round mgb-20"
                title=""
                alt=""
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
              />
              <p className="fs-110 font-cond-l" contenteditable="false">
                " Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. "
              </p>
              <h5
                className="font-cond mgb-5 fg-text-d fs-130"
                contenteditable="false"
              >
                Martha Stewart
              </h5>
              <small
                className="font-cond case-u lts-sm fs-80 fg-text-l"
                contenteditable="false"
              >
                Business Woman - New York
              </small>
            </li>
            <li>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar4.png"
                className="wpx-100 img-round mgb-20"
                title=""
                alt=""
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
              />
              <p className="fs-110 font-cond-l" contenteditable="false">
                " Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. "
              </p>
              <h5
                className="font-cond mgb-5 fg-text-d fs-130"
                contenteditable="false"
              >
                Ariana Menage
              </h5>
              <small
                className="font-cond case-u lts-sm fs-80 fg-text-l"
                contenteditable="false"
              >
                Recording Artist - Los Angeles
              </small>
            </li>
            <li>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar5.png"
                className="wpx-100 img-round mgb-20"
                title=""
                alt=""
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
              />
              <p className="fs-110 font-cond-l" contenteditable="false">
                " Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. "
              </p>
              <h5
                className="font-cond mgb-5 fg-text-d fs-130"
                contenteditable="false"
              >
                Sean Carter
              </h5>
              <small
                className="font-cond case-u lts-sm fs-80 fg-text-l"
                contenteditable="false"
              >
                Fund Manager - Chicago
              </small>
            </li>
          </ul>
        </div>
      </section>
      <Route path={`/products-details/${params.productId}/${params.info}`}>
        <ProductInfo />
      </Route>
    </div>
  );
};

export default ProductDetails;
