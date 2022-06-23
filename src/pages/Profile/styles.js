import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #000;

  a {
    color: #fff;
  }
`;

export const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Inconsolata", monospace;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 25px;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 1rem;
  text-align: justify;
  max-width: 700px;

  background: #000;
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
