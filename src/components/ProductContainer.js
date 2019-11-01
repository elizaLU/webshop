import React from "react";
import { Link } from "react-router-dom";

export default function ProductList(props) {
  const searchWord = props.searchValue;
  if (searchWord) {
    return props.products
      .filter(product => product.name === "props.searchValue")

      .map(product => (
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
      ));
  } else {
    return props.products.map(product => (
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
    ));
  }
}
