import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" />
    </Routes>
  );
}

export default App;
