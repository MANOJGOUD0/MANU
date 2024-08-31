import React from "react";
import { scooters } from "../data/scotters";
import { useParams } from "react-router-dom";

const Scotterdetails = () => {
  const { id } = useParams();
  const scotters = scooters.find((thing) => thing.id === id);

  return (
    <div>
      <div>
        <img src={scotters.image}></img>
      </div>
      <div>
        <h1>{scotters.model}</h1>
        <p>{scotters.price}</p>
        <p>{scotters.description}</p>
      </div>
    </div>
  );
};

export default Scotterdetails;
