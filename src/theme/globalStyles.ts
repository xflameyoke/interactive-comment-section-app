import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background: hsl(228, 33%, 97%);
  font-family: 'Rubik', sans-serif;
  }

  p {
    font-size: 16px;
  }
`;

export default GlobalStyle;
