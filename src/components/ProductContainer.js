import React from "react";

export default function ProductList(props) {
  return (
    <div>
      <h1>Product list</h1>
      <ul>
        {props.products.map(product => (
          <img
            height="200px"
            key={product.id}
            src={product.imageUrl}
            alt="productImage"
          ></img>
        ))}
      </ul>
    </div>
  );
}
