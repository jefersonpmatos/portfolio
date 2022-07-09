import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% { opacity: 0}
  100% {opacity: 100%}
`;

export const Container = styled.section`
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export const Name = styled.h1`
  animation: ${fadeIn} 3s ease;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  animation: ${fadeIn} 3s ease;
`;

export const LinkStyled = styled.a`
  color: #fff;
`;

export const ActionButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
