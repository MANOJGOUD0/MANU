import React from "react";
import { scooters } from "../data/scotters";
import { Link } from "react-router-dom";

const Scooters = () => {
  const scooterslice = scooters.slice(0, 3);
  return (
    <>
      <div className="holder">
        <p>scooters-</p>

        {scooterslice.map((thing) => {
          return (
            <div key={thing.id}>
              <Link to={`/Scotterdetails/${thing.id}`}>
                <img
                  className="boards"
                  src={thing.image}
                  alt={thing.model}
                ></img>
              </Link>
              <div className="subtitel">
                <h4>{thing.model}</h4>
                <p>{thing.price}</p>
                <p>{thing.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Scooters;
