import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smothing: antialiased;
    background: #f8f8f8;
    color: #29292e;
  }

  body, input, button, text-area {
    font: 400 16px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
