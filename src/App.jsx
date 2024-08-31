import "./App.css";
import React from "react";
import LAnding from "./stores/pages/LAnding";
import { Routes, Route } from "react-router-dom";

import Scootersfull from "./stores/pages/Scootersfull";
import Boardsfull from "./stores/pages/Boardsfull";
import Boardsdetails from "./stores/singles/Boardsdetails";
import Scotterdetails from "./stores/singles/Scotterdetails";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<LAnding />} />
          <Route path="/boards" element={<Boardsfull />} />
          <Route path="/Scooters" element={<Scootersfull />} />
          <Route path="/boardsdetail/:id" element={<Boardsdetails />} />
          <Route path="/Scotterdetails/:id" element={<Scotterdetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
