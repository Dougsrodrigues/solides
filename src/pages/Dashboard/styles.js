import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const ContainerContent = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: calc(100% - 124px);
  width: 100%;
  max-width: 960px;
`;

export const Content = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 100%;
  max-width: 650px;
  height: 300px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
  }
`;

export const HourContent = styled.ul`
  margin: 0px 10px 10px 0px;
  display: flex;
  width: 100%;
  max-width: 300px;
  justify-content: center;

  list-style-type: none;
  text-decoration: none;
  li {
    border-radius: 50%;
    padding: 10px;
    background: #ccc;
    & + li {
      margin-left: 3px;
    }
  }
`;
