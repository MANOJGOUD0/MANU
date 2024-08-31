import React from "react";
import Products from "../components/Products";
import NAvbar from "../components/NAvbar";
import Boards from "../components/Boards";
import Scooters from "../components/Scooters";
const LAnding = () => {
  return (
    <div>
      <NAvbar />
      <Products />
      <div className="landing">
        <Boards />
        <Scooters />
      </div>
    </div>
  );
};

export default LAnding;
