import { createGlobalStyle } from "styled-components";

const Theme = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');


 html, body {
    font-family: 'Roboto', sans-serif;
    color: #fefefe;
    background-color: #fefefe;
    box-sizing: border-box;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 80px;
    color: #000;
    font-weight: 600;
    text-transform: uppercase;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    color: #2d2d2d;
    font-weight: 600;
    text-transform: uppercase;
  }

  h3 {
    font-family: 'Space Mono', monospace;
  }
`;
export { Theme };
