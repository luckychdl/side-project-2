import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    padding: 0 8px;
    margin: 0;
    color: #0f0f0f;
  }
`
export default GlobalStyle