import React from "react";


export default function ProductDetail(props) {
  const singleProduct = props.singleProduct;
  const addProduct = props.addProduct;
 
  return (
    <div>
      <h1>{singleProduct.name}</h1>
      <p>
        <i>Price: €{singleProduct.price}</i>
      </p>

      <img height="300px" src={singleProduct.imageUrl} alt={singleProduct.names}></img>
      <br />
      <button onClick={() => addProduct(singleProduct)}>ADD TO CART</button>
    </div>
  );
}
