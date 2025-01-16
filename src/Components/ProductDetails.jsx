import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProductDetails.module.css"; 

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.productDetails}>
      <div className={styles.card}>
        <h1>{product.title}</h1>
        <img src={product.thumbnail} alt={product.title} />
        <p>{product.description}</p>
        <p className={styles.price}>Price: ${product.price}</p>
        <button
          className={styles.backButton}
          onClick={() => navigate("/products")} 
        >
          Back to Products
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
