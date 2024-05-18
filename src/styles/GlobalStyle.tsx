import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }

  * {
    box-sizing: border-box;
  }

  @media (max-width: 600px) {
    body {
      font-size: 14px;
    }

    input, button {
      width: 100%;
    }
  }
`;

export default GlobalStyle;
