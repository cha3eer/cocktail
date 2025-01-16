import React from "react";
import { Link } from "react-router-dom"; 
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.hero}>
      <h1>It's time for some Cocktails</h1>
      <Link to="/products">
        <button>View Cocktails</button>
      </Link>
    </div>
  );
}

export default Home;
