import styled from "styled-components";
import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% { width: 0}
  100% {width: 100%}
`;

export const Line = styled.hr`
  display: flex;
  position: relative;
  border: 1px solid #23c483;
  background: #23c483;
  max-width: 300px;
  animation: ${fadeIn} 5s ease;
`;
