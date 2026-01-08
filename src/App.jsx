import React from "react";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  );
};

export default App;
