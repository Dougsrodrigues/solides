import styled from 'styled-components';
import { Row, Col, Container as BootstrapContainer } from 'react-bootstrap';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  height: calc(100vh - 124px);
  border-radius: 5px;
`;
export const Content = styled(BootstrapContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  max-width: 650px;
  background: white;
  border-radius: 5px;

  > div {
    h1,
    h3 {
      text-align: center;
    }
  }
`;

export const HourContent = styled(Row)`
  width: 300px;
`;
export const Item = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  padding: 28px;
  border-radius: 50%;
  background: #c9c9c9;
  margin: 0px 0px 5px 10px;
  font-weight: bold;
`;
