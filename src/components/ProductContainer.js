import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default function ProductList(props) {
  return (
    <Container>
      <div id="product">
        {props.products.map(product => (
          <div id="productBox">
            <Link to={`/products/${product.id}`}>
              <img
                id="productImage"
                height="200px"
                key={product.id}
                src={product.imageUrl}
                alt="productImage"
              ></img>
            </Link>
            <br />
            {product.name}
          </div>
        ))}
      </div>
    </Container>
  );
}
