import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% { width: 0}
  100% {width: 100%}
`;

export const Line = styled.hr`
  display: flex;
  position: relative;
  border: 1px solid;
  background: #22c8e5;
  max-width: 500px;
  animation: ${fadeIn} 5s ease;
`;
