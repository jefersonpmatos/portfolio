import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: 50px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #22c8e5;
  transition: 0.3s all ease;

  &:hover {
    color: #91e4f2;
  }
`;
