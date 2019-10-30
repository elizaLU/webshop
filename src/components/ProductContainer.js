import React from "react";
import { Link } from 'react-router-dom'

export default function ProductList(props) {
  return (
    <div>
      <h1>Product list</h1>
      <ul>
        {props.products.map(product => (
          <div>
            <Link to={`/products/${product.id}`}>
              <img
                height="200px"
                key={product.id}
                src={product.imageUrl}
                alt="productImage">
              </img>
            </Link>
            {product.name}
          </div>
        )
        )}
      </ul>
    </div>
  );
}
