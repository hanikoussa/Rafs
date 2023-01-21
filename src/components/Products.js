import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import ProductsContext from "../context/ProductsContext";
import CarouselComponent from "./CarouselComponent";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from "mdb-react-ui-kit";

import "../carousel.css";

function Products({ addToCart }) {
  const history = useHistory();
  const products = useContext(ProductsContext);

  if (!products.length) {
    return (
      <>
        <CarouselComponent />
        <h2>
          Your have no products. Please{" "}
          <Link to="/add-product">add new product</Link>
        </h2>
      </>
    );
  }

  return (
    <>
      <CarouselComponent />
      <MDBRow className="row-cols-1 row-cols-md-2 g-4">
        {products.map((product) => (
          <MDBCol
            key={product.id}
            style={{
              paddingBottom: 30
            }}
          >
            <MDBCard>
              <MDBCardImage src={product.url} position="top" />
              <MDBCardBody>
                <MDBCardTitle>{product.name}</MDBCardTitle>
                <MDBCardText>{product.description}</MDBCardText>
                <MDBBtn
                  style={{
                    color: "#C05528",
                    borderColor: "#C05528",
                    backgroundColor: "white"
                  }}
                  onClick={() => {
                    addToCart(product);
                    alert(`${product.name} added to cart`);
                    history.push("/cart");
                  }}
                >
                  Add To Cart
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </>
  );
}

export default Products;
