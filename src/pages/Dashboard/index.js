import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { Content, Container, HourContent, Item } from './styles';
import Header from '../../components/commom/Header';
import Button from '../../components/commom/Button';
import api from '../../services/api';

export default function Dashboard() {
  const { userInfo } = useSelector((state) => state.signIn);
  const [currentDate, setCurrentDate] = useState([]);
  const [currentDateHours, setCurrentDateHours] = useState([]);

  const getHoursCurrentDate = async () => {
    if (userInfo.data) {
      const { token } = userInfo.data;

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

  const getCurrentDateInfo = () => {
    setCurrentDate(new Date());
  };

  const handleHitPoint = async () => {
    const { token } = userInfo.data;

    const formatCurrentDay = moment(currentDate).format('DD-MM-YYYY');
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
          `datasBatidas/${formatCurrentDay}/batidas.json?auth=${token}`,
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
        `datasBatidas/${formatCurrentDay}/batidas.json?auth=${token}`,
        hours
      );
      getHoursCurrentDate();
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getCurrentDateInfo();
  }, []);

  useEffect(() => {
    getHoursCurrentDate();
  }, [userInfo]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <div>
            <h1>Olá, {userInfo.data ? userInfo.data.name : ''}</h1>
            <h3>{moment(currentDate).format('DD/MM/YYYY')}</h3>
          </div>
          <HourContent md={6}>
            {currentDateHours &&
              currentDateHours.map((hour) => <Item key={hour}>{hour}</Item>)}
          </HourContent>
          <Button textButton="Registrar ponto" onClick={handleHitPoint} />
        </Content>
      </Container>
    </>
  );
}
