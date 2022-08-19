import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;

  @media (max-width: 600px) {
    padding-top: 0;
    height: 100vh;
  }
`;

export const Text = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-size: 2vw;
  text-shadow: 2px 2px 2px rgba(229, 63, 34, 0.4);
  max-width: 90vw;
  min-height: 200px;
  border: 1px solid #fff;
  background-color: #000;
  z-index: 88;
  margin-top: 20px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ContainerSkills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70vw;
  padding-top: 4vh;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    width: 200px;
    height: auto;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  gap: 5px;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    transform: translateY(-8px);
  }

  img {
    width: 100px;
    @media (max-width: 600px) {
      width: 50px;
    }

    filter: drop-shadow(4px 4px 1px rgba(34, 200, 229, 0.4));
  }
`;
