import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.button`
  ${(props) => {
    if (props.link) {
      return css`
        font-family: "Inconsolata", monospace;
        font-size: 14px;
        line-height: 20px;
        text-transform: uppercase;
        color: ${(props) => props.color || "#fff"};
        letter-spacing: 3px;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        background: none;
        padding: 10px 15px;
        outline: none;
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        &:hover {
          color: #fff;
          background-color: #22c8e5;
          box-shadow: 0px 5px 20px rgba(34, 200, 229, 0.4);
          transform: translateY(-4px);
        }
      `;
    } else {
      return css`
        font-family: "Inconsolata", monospace;
        padding: 10px 15px;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #fff;
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 4px;
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;

        &:hover {
          background-color: #22c8e5;
          box-shadow: 0px 5px 20px rgba(34, 200, 229, 0.4);
          transform: translateY(-7px);
          border: none;
          z-index: 20;
        }
      `;
    }
  }}
`;
