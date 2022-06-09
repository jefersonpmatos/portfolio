import styled from "styled-components";

export const Wrapper = styled.div`
  h1 {
    color: #fff;
  }
  text-shadow: 5px 5px 5px rgba(46, 229, 157, 0.4);
`;

export const Container = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    gap: 5px;

    p {
      color: #fff;
      font-weight: 600;
    }

    &:hover {
      cursor: pointer;
      background-color: transparent;
      transform: translateY(-8px);
    }
  }
`;
