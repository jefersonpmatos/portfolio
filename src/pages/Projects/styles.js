import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 150vh;
  background: #000;
`;

export const DivStyled = styled.div`
  gap: 15px;
  padding: 1rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 1200px;
`;

export const Card = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 4px;
  padding: 1rem;
  background: transparent;
  border: #fff 1px solid;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 15px rgba(34, 200, 229, 0.4);
  }
`;
export const Buttons = styled.div`
  display: flex;
  min-height: 40px;
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
  position: absolute;
  margin-bottom: 10px;
  bottom: 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.cl || "#fff"};

  &:hover {
    color: ${(props) => props.clh || "#22c8e5"};
  }
`;

export const ContainerSkills = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  gap: 5px;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    transform: translateY(-8px);
  }
`;
