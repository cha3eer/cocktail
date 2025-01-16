import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>COCKTAIL APP</h1>
      <ul>
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/about">About</Link> 
        </li>
        <li>
          <Link to="/products">Products</Link> 
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
