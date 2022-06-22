import { createGlobalStyle } from "styled-components";

const Theme = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');


 html, body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    letter-spacing: 3px;
    font-size: 80px;
    color: #ffffff;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 5px 5px 2px rgba(229, 63, 34, 0.4);

  }

  h2 {
    font-family: "Inconsolata", monospace;
    letter-spacing: 2.5px;
    font-size: 40px;
    color: #ffffff;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 5px 5px 2px rgba(34, 200, 229, 0.4);
  }

  h3 {
    letter-spacing: 2.5px;
    color: #ffffff;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 3px 3px 2px rgba(34, 200, 229, 0.4);
    font-size: 20px;
  }

  p {
    font-family: "Inconsolata", monospace;
    color: #cccccc;
  }

  a {
    text-decoration: none;
  }
`;
export { Theme };
