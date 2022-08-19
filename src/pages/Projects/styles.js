import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20vh;

  @media (max-width: 600px) {
    margin-top: 0;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Card = styled.div`
  ${(props) => {
    if (props.reverse) {
      return css`
        display: flex;
        flex-direction: row-reverse;
        gap: 2rem;
        min-width: 900px;
        max-width: 900px;
        padding: 1rem;
        z-index: 50;

        @media (max-width: 600px) {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      `;
    } else {
      return css`
        display: flex;
        gap: 2rem;
        min-width: 900px;
        max-width: 900px;
        padding: 1rem;
        z-index: 50;

        @media (max-width: 600px) {
          display: flex;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      `;
    }
  }}
`;

export const CardText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  min-width: 20vw;
  padding: 10px;

  @media (max-width: 600px) {
    display: flex;
  }
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

export const Gif = styled.img`
  border: 1px solid #fff;
  padding: 5px;
  width: 550px;
  height: auto;
`;
