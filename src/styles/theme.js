import { createGlobalStyle } from "styled-components";

const Theme = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');


 html, body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    background-color: #000;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    letter-spacing: 3px;
    font-size: 100px;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 5px 5px 2px rgba(229, 63, 34, 0.4);

    @media screen and (max-width: 600px) {
    font-size: 30px;
    }

  }

  h2 {
    font-family: "Inconsolata", monospace;
    letter-spacing: 2.5px;
    font-size: 50px;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 5px 5px 2px rgba(34, 200, 229, 0.4);

    @media screen and (max-width: 600px) {
    font-size: 15px;
    }
  }

  h3 {
    font-family: "Inconsolata", monospace;
    letter-spacing: 2.5px;
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 4px 3px 2px rgba(229, 63, 34, 0.4);

    @media screen and (max-width: 600px) {
    font-size: 16px;
    }
  }

  p {
    font-family: "Inconsolata", monospace;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 2px 2px 2px rgba(34, 200, 229, 0.4);
    
    @media (max-width: 600px) {
width: 90vw;
    }
  }

  a {
    text-decoration: none;
    transition: 0.2s opacity;

    &:hover {
      opacity: 0.8;
    }
  }
`;
export { Theme };
