import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Home page/HomePage";
const RouterHandler = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default RouterHandler;
