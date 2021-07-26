import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --white: #fff;
    --background: #FFFCF9;
    --gray-line: #dcdde0;
    --text: #4C4C4C;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #e83f5b;
    --green: #4cd62b;
    --blue: #5965e0;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
  }

  @font-face {
    font-family: "SFProDisplay";
    src: url("/fonts/SFProDisplay/SF-Pro.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  /* @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }
  
  @media(max-width: 720px){
    html{
      font-size: 87.5%;
    }
  } */
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    background: var(--background);
    color: var(--text);
    overflow: hidden;
    overflow-y: hidden;
  }

  * {
  ::-webkit-scrollbar {
        width: 0.5rem;
        height: 0.5rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #c5c5c5;
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: #f2f3f5;
    }
  }
  
  body, input, textarea, button{
    font: 400 1rem "SFProDisplay", sans-serif;
  }
  
  button {
    cursor: pointer;
  }
  
`;