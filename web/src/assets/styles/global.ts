import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

:root {
  font-size: 62.5%;

  --black: #222222;
  --white: #fffff3;
  --color-loading: #2b2b2b;
}

html,
body {
  margin: 0;
  padding: 0;

  background-color: var(--black);
  color: var(--white);
}

a {
  color: inherit;
}

#root {
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
