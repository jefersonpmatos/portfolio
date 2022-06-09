import styled from "styled-components";
import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% { border-bottom-width: 0}
  100% {border-bottom-width: 100%}
`;

export const Wrapper = styled.div`
  h1 {
    color: #fff;
    text-shadow: 5px 5px 5px rgba(46, 229, 157, 0.4);
  }
`;

export const Container = styled.div`
  form {
    display: flex;
    justify-content: center;

    label {
      color: #fff;
      text-shadow: 5px 5px 5px rgba(46, 229, 157, 0.4);

      display: block;
      text-transform: uppercase;
    }

    div {
      display: flex;
      justify-content: center;
      min-height: 50px;
    }

    input {
      display: block;
      color: #000;
      font-size: 14px;
      background-color: transparent;
      min-width: 300px;
      box-sizing: border-box;
      padding-inline: 0.5em;
      padding-block: 0.7em;
      border: none;
      border-radius: 4px;
      border: 2px solid transparent;
      transition: all 0.3s ease;
      background: #fff;

      ::placeholder {
        font-family: "Roboto";
        color: #000;
      }

      &:hover {
        border-radius: 4px;
        border-bottom: 2px solid #23c483;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);

        ::placeholder {
          color: #5e6683;
        }
      }

      &:focus {
        outline: 0;
        -webkit-appearance: none;

        ::placeholder {
          color: transparent;
        }
      }
    }
  }
`;
