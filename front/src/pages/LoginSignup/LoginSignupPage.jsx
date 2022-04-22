import React, { useEffect, useState } from "react";

import {
  LoginSignupContainer,
  InstaPhoneImage,
  Section,
  RenderdImages,
  GlobalCssForLoginSignup,
} from "./LoginSignupPage_style";

// import LoginComponent from "../../components/login component";

import useLoginSignup from "../../Custom Hooks/useLoginSignup";
const LoginSignupPage = () => {
  const [loginData, setLoginData] = useLoginSignup({
    userName: "",
    password: "",
  });
  const { userName, password } = loginData;

  const loginuser = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <LoginSignupContainer>
        <Section>
          <GlobalCssForLoginSignup />
          <form onSubmit={loginuser}>
            <div className="htmlForm-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="htmlForm-control"
                id="exampleInputEmail1"
                name="userName"
                value={userName}
                onChange={setLoginData}
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="htmlForm-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                className="htmlForm-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={setLoginData}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Section>
      </LoginSignupContainer>
    </>
  );
};

export default LoginSignupPage;
// harsh
