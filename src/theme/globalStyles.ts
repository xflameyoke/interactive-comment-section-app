import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background: hsl(228, 33%, 97%);
  }

  p {
    font-size: 16px;
  }
`;

export default GlobalStyle;
