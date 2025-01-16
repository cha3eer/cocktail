import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Link to={`/products/${product.id}`} className={styles.link}>
        View Product
      </Link>
    </div>
  );
}

export default ProductCard;
