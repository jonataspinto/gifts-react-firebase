import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html, body, #root{
    height: 100%;
    width: 100%;
  }

  body{
    background-color: ${(props) => props.theme.background.primary};
    color: ${(props) => props.theme.colors.text};
    font-family: sans-serif;
  }

  button{
    outline: none;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
export default GlobalStyle;
