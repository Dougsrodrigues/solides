import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
      margin:0;
      padding:0;
      outline:0;
      box-sizing:border-box;
    }
  body{
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    background: #f2f2f2;
  }
  body , input, button{
    font-family:'Montserrat' ,sans-serif;
    font-size:16px;
  }

  button{
    cursor: pointer;
  }
`;
