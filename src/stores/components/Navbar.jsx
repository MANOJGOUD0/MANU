import React from "react";

const NAvbar = () => {
  return (
    <div className="containerweb">
      <div className="title">
        <button className="headingbutton">
          <h2>E-COMMERS</h2>
        </button>
      </div>
      <div className="search">
        <input type="text" placeholder="search.."></input>
      </div>
      <div className="user-actions">
        <div className="signin">signin/signup</div>
        <div className="cart">CART</div>
      </div>
    </div>
  );
};

export default NAvbar;
