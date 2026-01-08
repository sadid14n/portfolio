import React from "react";
import { Route, Routes } from "react-router-dom";
import Portfolio from "../src/pages/PortFolio.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  );
};

export default App;
