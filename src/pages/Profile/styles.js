import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 0 20px;

  h1,
  h2 {
    text-align: center;
    z-index: 50;
    text-transform: uppercase;
    text-shadow: 5px 5px 5px rgba(46, 229, 157, 0.4);
  }

  p {
    color: #000;
  }

  span {
    img {
      width: 100px;
    }

    a {
      text-decoration: none;
      color: #000;
    }
  }
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
