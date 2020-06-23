import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Accordion, Card, Button, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { Content, HourContent } from './styles';
import Header from '../../components/commom/Header';

export default function FolhaDePonto() {
  const { userInfo } = useSelector((state) => state.signIn);
  const [datesInfo, setDatesInfo] = useState([]);

  const formatReturnDataApi = (values = {}) => {
    const arrayDataApi = [];
    let dateKeys = [];

    dateKeys = Object.keys(values);

    dateKeys.map((date, i) => {
      arrayDataApi.push({
        id: i,
        date,
        batidas: values[date].batidas,
      });
    });

    return arrayDataApi;
  };

  const getDatas = async () => {
    if (userInfo.data) {
      const { token } = userInfo.data;

      try {
        const res = await api.get(`datasBatidas.json?auth=${token}`);
        if (res.data === null) {
          res.data = {};
        }

        const formatedData = formatReturnDataApi(res.data);

        setDatesInfo(formatedData);
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  useEffect(() => {
    getDatas();
  }, [userInfo]);

  return (
    <>
      <Header />
      <Container>
        <Accordion defaultActiveKey="0">
          {datesInfo && datesInfo.length > 0
            ? datesInfo.map((date) => (
                <Card key={date.id}>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey={`${date.id}`}
                    >
                      {date.date}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={`${date.id}`}>
                    <Card.Body>
                      <Col>
                        <Content>
                          <h4>Funcionário: {userInfo.data.name}</h4>
                        </Content>
                        <hr />
                        <h3>Batidas no dia:</h3>
                        <HourContent>
                          {date.batidas.map((hour) => (
                            <p key={hour}>{hour}</p>
                          ))}
                        </HourContent>
                      </Col>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))
            : null}
        </Accordion>
      </Container>
    </>
  );
}
