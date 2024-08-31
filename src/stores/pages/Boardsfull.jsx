import React from "react";
import { skatingboards } from "../data/boards.js";
import NAvbar from "../components/NAvbar.jsx";
import { Link } from "react-router-dom";
import Products from "../components/Products";

const Boardsfull = () => {
  return (
    <div className="newnavbar">
      <NAvbar />
      <Products />

      <h1>Boards</h1>
      <div className="holder">
        <p>skatingboards-</p>
        {skatingboards.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/boardsdetail/${item.id}`}>
                <img
                  className="boards"
                  src={item.image}
                  alt={item.product}
                ></img>
              </Link>
              <div className="subtitel">
                <h4>{item.model}</h4>
                <p>{item.price}</p>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Boardsfull;
