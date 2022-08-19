import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  top: 0.1px;
  position: fixed;
  border-radius: 4px;
  z-index: 99;
  transition: all 0.3s ease;
  padding: 5px;
  width: 100%;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 50px;
`;
