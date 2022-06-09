import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.button`
  ${(props) => {
    if (props.link) {
      return css`
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: #fff;
        cursor: pointer;
        position: relative;
        border: none;
        border-radius: 4px;
        background: none;
        padding: 10px 20px;
        outline: none;
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        will-change: transform;
        &:hover {
          color: #fff;
          background-color: #23c483;
          box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
          transform: translateY(-2px);
        }
      `;
    } else {
      return css`
        padding: 1.3em 3em;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 500;
        color: #000;
        background-color: #fff;
        border: 1px solid #000;
        border-radius: 4px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;

        &:hover {
          background-color: #23c483;
          box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
          color: #fff;
          transform: translateY(-7px);
          border: none;
        }

        &:active {
          transform: translateY(-1px);
        }
      `;
    }
  }}
`;
