import React, { useState } from "react";
import { skatingboards } from "../data/boards.js";
import { useParams } from "react-router-dom";
import NAvbar from "../components/NAvbar.jsx";

const Boardsdetails = () => {
  const [addcart, setAddcart] = useState("");

  const { id } = useParams();
  const boards = skatingboards.find((item) => item.id === id);
  return (
    <>
      <NAvbar />
      <div className="details">
        <div className="imagefull">
          <img src={boards.image}></img>
        </div>
        <div className="subtitel">
          <p>
            Model: {boards.model}
            <br />
            Price: {boards.price}
            <br />
            Description: {boards.description}
          </p>
          <div>
            <button className="button">add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Boardsdetails;
