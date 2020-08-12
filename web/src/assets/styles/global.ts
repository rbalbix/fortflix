import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

:root {
  font-size: 60%;

  --primary: #2a7ae4;
  --black: #222222;
  --blackLighter: #9e9e9e;
  --grayLight: #f5f5f5;
  --grayMedium: #e5e5e5;
  --white: #ffffff;
  --frontEnd: #6bd1ff;
  --backEnd: #00c86f;
}

html,
body {
  margin: 0;
  padding: 0;

  background-color: var(--black);
}

a {
  color: inherit;
}

#root {
  min-height: calc(100vh - var(--bodyPaddingTop));
  display: flex;
  flex-direction: column;
}

@media(max-width: 700px) {
  :root{
    font-size: 60%;
  }
}

`;

export default GlobalStyle;
