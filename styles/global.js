import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    padding: 0 16px;
    margin: 0;
  }
`
export default GlobalStyle