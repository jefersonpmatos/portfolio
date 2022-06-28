import styled, { css } from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 280vh;
  background: #000;
`;

export const Card = styled.div`
  ${(props) => {
    if (props.reverse) {
      return css`
        display: flex;
        justify-content: flex-end;
        flex-direction: row-reverse;
        gap: 1rem;
        min-width: 900px;
        max-width: 900px;
        padding: 1rem;
        border: 1px solid #fff;
        background-color: #000;
        z-index: 20;
      `;
    } else {
      return css`
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
        min-width: 900px;
        max-width: 900px;
        padding: 1rem;
        border: 1px solid #fff;
        background-color: #000;
        z-index: 20;
      `;
    }
  }}
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  min-height: 40px;
  align-items: center;
  gap: 1rem;
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
`;

export const Techs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.cl || "#fff"};

  &:hover {
    color: ${(props) => props.clh || "#22c8e5"};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const Gif = styled.img`
  border: 1px solid #fff;
  padding: 2px;
  z-index: 20;

  &:hover {
    border: 1px solid #22c8e5;
    box-shadow: 0px 10px 15px rgba(34, 200, 229, 0.4);
  }
`;

export const CardText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;
