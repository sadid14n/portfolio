import React from "react";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/PortFolio";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
