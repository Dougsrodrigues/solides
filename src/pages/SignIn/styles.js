import styled from 'styled-components';

import singInBackgroundSvg from '../../assets/devHour.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContent = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 500px;
  height: 500px;

  h1 {
    font-size: 1.25em;
    max-width: 300px;
    margin: 16px 0px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      margin-top: 6px;
      width: 300px;
      display: flex;
      justify-content: space-between;
    }

    a {
      text-decoration: none;
    }
  }
`;

export const Background = styled.div`
  width: 100%;
  max-width: 600px;
  height: 500px;
  background: url(${singInBackgroundSvg}) no-repeat center #296cff;
  background-size: 60%;
`;
