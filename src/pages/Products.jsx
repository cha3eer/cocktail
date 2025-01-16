import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import styles from "./Products.module.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className={styles.products}>
      <h1 style={{ color: "#143e6a" }}>Our Products</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
