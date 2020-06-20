import React from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { Formik, Form } from 'formik';

import { Container, Content } from './styles';
import Header from '../../components/commom/Header';
import Input from '../../components/commom/Input';
import Button from '../../components/commom/Button';

export default function Dashboard() {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Formik
            initialValues={{ matricula: '', password: '' }}
            // validationSchema={signInSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
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
