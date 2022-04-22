import styled from "styled-components";
import { createGlobalStyle, css } from "styled-components";

const displayFlexJCAIC = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginSignupContainer = styled.div`
  ${displayFlexJCAIC}
  background-color: #fafafa;
  height: 100%;
  /* overflow-x: auto; */
`;
export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  form {
    border: 2px solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    label {
      text-align: start;
    }
    .htmlForm-group {
      width: 100%;
      margin: 20px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const GlobalCssForLoginSignup = createGlobalStyle`

.invisible{
  display: none;
}
.visible{
  display: block;
 
}

.fade-appear{
  opacity: 0;    
}
.fade-appear-active{
  animation: fadeOut;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: .9;
  }

  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  100% {
    opacity: 1;
  }

  0% {
    opacity: 0.88;
  }
}
`;
//Harsh
