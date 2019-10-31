import React from "react";

export default function ProductDetail(props) {
  const singleProduct = props.singleProduct;
  return (
    <div>
      <h1>{singleProduct.name}</h1>

      <p>
        <i>{singleProduct.price}</i>
      </p>

      <img height="400px" src={singleProduct.imageUrl}></img>
    </div>
  );
}
