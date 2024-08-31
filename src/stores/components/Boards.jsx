import React from "react";

import { skatingboards } from "../data/boards.js";
import { Link } from "react-router-dom";

const Boards = () => {
  const slicingofboard = skatingboards.slice(0, 3);
  return (
    <div className="holder">
      <p>skatingboards-</p>
      {slicingofboard.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/boardsdetail/${item.id}`}>
              <img className="boards" src={item.image} alt={item.product}></img>
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
  );
};

export default Boards;
