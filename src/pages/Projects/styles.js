import styled from "styled-components";

export const Container = styled.div`
  span {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    padding: 1rem;
  }

  h1,
  h2 {
    display: flex;
    justify-content: center;
    align-self: center;
    text-shadow: 5px 5px 5px rgba(46, 229, 157, 0.4);
  }

  h2 {
    font-size: 18px;
    a {
      color: #23c483;

      &:hover {
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      }
    }
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  width: 250px;
  height: 250px;
  border-radius: 4px;
  padding: 1rem;
  background: transparent;
  border: #000 1px solid;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 15px rgba(46, 229, 157, 0.4);
  }

  button {
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
  }

  span {
    display: flex;
    justify-content: space-evenly;
    min-height: 20px;

    a {
      text-decoration: none;
      color: #000;

      &:hover {
        color: #23c483;
      }
    }
  }

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 14px;
  }

  h3 {
    display: flex;
    align-self: bottom;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    color: #3b3c54;
  }

  button {
    cursor: pointer;
    text-decoration: none;
  }
`;

export const Techs = styled.div`
  display: flex;
  min-height: 20px;
`;
export const Title = styled.div`
  display: flex;
  text-align: left;
  min-height: 20px;
`;
export const Details = styled.div`
  display: flex;
  min-height: 40px;
`;
export const Buttons = styled.div`
  display: flex;
  min-height: 40px;

  a {
    text-decoration: none;
    color: #000;

    &:hover {
      color: #23c483;
    }
  }
`;
