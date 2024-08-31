import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="submenu">
      <h3>PRODUCTS</h3>
      <button>
        <Link to="/boards">boards </Link>
      </button>
      <br />
      <button>
        <Link to="/Scooters"> Scooters</Link>
      </button>
    </div>
  );
};

export default Products;
