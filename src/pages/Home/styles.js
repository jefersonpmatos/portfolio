import styled from "styled-components";

export const Container = styled.div`
  min-height: 500px;

  h1,
  h2 {
    color: #fff;
    text-shadow: 5px 5px 5px rgba(46, 229, 157, 0.4);
  }

  a {
    text-decoration: none;
    color: #000;
  }

  span {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      a {
        text-shadow: 0 0 10px blue;
        color: #fff;

        &:hover {
          transition: all 0.3s ease;
          color: #23c483;
          /* background-color: rgba(46, 229, 157, 0.4);
          box-shadow: 0px 5px 10px rgba(46, 229, 157, 0.4); */
        }
      }
    }
  }
`;

export const ActionButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
