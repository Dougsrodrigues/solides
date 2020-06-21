import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { Container, Content, ContainerContent, HourContent } from './styles';
import Header from '../../components/commom/Header';
import Button from '../../components/commom/Button';
import api from '../../services/api';

export default function Dashboard() {
  const { userInfo } = useSelector((state) => state.signIn);
  const [currentDateHours, setCurrentDateHours] = useState([]);

  const getHoursCurrentDate = async () => {
    if (userInfo.data) {
      const { token } = userInfo.data;
      const currentDate = new Date();
      const monthAndYearDate = moment(currentDate).format('DD-MM-YYYY');

      try {
        const res = await api.get(
          `datasBatidas/${monthAndYearDate}/batidas.json?auth=${token}`
        );
        if (res.data === null) {
          res.data = {};
        }
        setCurrentDateHours(Object.values(res.data));
      } catch (err) {
        alert(err.message);
      }
    }
  };

  const handleHitPoint = async () => {
    const { token } = userInfo.data;
    const currentDate = new Date();
    const monthAndYearDate = moment(currentDate).format('DD-MM-YYYY');
    const hourDate = moment(currentDate).format('HH:mm');

    try {
      const hours = currentDateHours;

      if (hours.length > 0) {
        const sameHour = hours.find((hour) => hour === hourDate);

        if (sameHour) {
          alert('Não é possivel cadastrar horarios duplicados');
          return;
        }
        hours.push(hourDate);

        await api.put(
          `datasBatidas/${monthAndYearDate}/batidas.json?auth=${token}`,
          hours
        );
        getHoursCurrentDate();
        return;
      }

      // Aqui era pra ser um POST, porem não consegui achar um jeito que ficasse bacana
      // o retorno dos dados, na hora de salvar com Firebase,
      // porém deixei a logica de como seria, caso fosse um POST.
      hours.push(hourDate);
      await api.put(
        `datasBatidas/${monthAndYearDate}/batidas.json?auth=${token}`,
        hours
      );
      getHoursCurrentDate();
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getHoursCurrentDate();
  }, [userInfo]);

  return (
    <>
      <Container>
        <Header />
        <ContainerContent>
          <Content>
            <div>
              <h1>Olá, Douglas.</h1>
              <h3>21/06/2020</h3>
            </div>

            <HourContent>
              {currentDateHours &&
                currentDateHours.map((hour) => <li key={hour}>{hour}</li>)}
            </HourContent>
            <Button textButton="Registrar ponto" onClick={handleHitPoint} />
          </Content>
        </ContainerContent>
      </Container>
    </>
  );
}
