import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

   html, body {
    font-family: 'Nunito', sans-serif;
    background-color: #ffffff;
    color: #541138;
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;