import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: calc(100% - 124px);
  width: 100%;
  max-width: 960px;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    border-radius: 5px;
    width: 100%;
    max-width: 650px;
    height: 400px;

    h1 {
      margin-bottom: 12px;
    }
  }
`;
