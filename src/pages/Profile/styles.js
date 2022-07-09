import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-size: 30px;
  text-shadow: 2px 2px 2px rgba(229, 63, 34, 0.4);
  max-width: 900px;
  min-height: 350px;
`;

export const ContainerSkills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
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
    filter: drop-shadow(4px 4px 1px rgba(34, 200, 229, 0.4));
    transition: 0.2s;

    &:hover {
      filter: drop-shadow(6px 6px 1px rgba(34, 200, 229, 0.4));
    }
  }
`;
