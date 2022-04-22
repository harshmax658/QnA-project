import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Home page/HomePage";
import LoginSignupPage from "./LoginSignup/LoginSignupPage";
import Question from "./questions/Question";

import Header from "../components/Header/Header";
const RouterHandler = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/questions" element={<Question />} />
      </Routes>
    </>
  );
};

export default RouterHandler;
