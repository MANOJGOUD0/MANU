import React from "react";
import { scooters } from "../data/scotters";
import NAvbar from "../components/NAvbar.jsx";
import { Link } from "react-router-dom";

const Scootersfull = () => {
  return (
    <>
      <NAvbar />
      <div className="holder">
        <h1>scooters</h1>
        {scooters.map((thing) => {
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

export default Scootersfull;
