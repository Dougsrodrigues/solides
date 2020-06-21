import React from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';
import moment from 'moment';

import registroPontoSchema from './ValidationSchema';
import { Container, Content } from './styles';
import Header from '../../components/commom/Header';
import Input from '../../components/commom/Input';
import Button from '../../components/commom/Button';
import api from '../../services/api';

export default function Dashboard() {
  const { userInfo } = useSelector((state) => state.signIn);

  const handleHitPoint = async (values) => {
    const { token } = userInfo.data;
    const currentDate = new Date();
    const monthAndYearDate = moment(currentDate).format('YYYY-MM');
    debugger;

    // try {
    //   const res = await api.get(`/datasBatidaPonto.json?auth=${token}`);

    //   // console.log(res.data);
    //   console.log(new Date());
    // } catch (err) {
    //   alert(err.message);
    // }
  };

  return (
    <>
      <Container>
        <Header />
        <Content>
          <Formik
            initialValues={{ matricula: '', password: '' }}
            // validationSchema={registroPontoSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                handleHitPoint(values);
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {({ handleSubmit, values, errors }) => (
              <Form onSubmit={handleSubmit}>
                <h1>Olá, Douglas</h1>
                <Input
                  type="text"
                  name="matricula"
                  placeholder="Matricula:"
                  // error={errors.email}
                  icon={FiUser}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password:"
                  // error={errors.password}
                  icon={FiLock}
                />

                <Button type="submit" textButton="Registrar ponto" />
              </Form>
            )}
          </Formik>
        </Content>
      </Container>
    </>
  );
}
