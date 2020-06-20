import React from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { Formik, Form } from 'formik';

import { useSelector } from 'react-redux';
import { Container, Content } from './styles';
import Header from '../../components/commom/Header';
import Input from '../../components/commom/Input';
import Button from '../../components/commom/Button';
// import api from '../../services/api';

export default function Dashboard() {
  const { userInfo } = useSelector((state) => state.signIn);

  // const request = async () => {
  //   const res = await api.get(
  //     '/teste.json?auth=eyJhbGciOiJSUzI1NiIsImtpZCI6ImMzZjI3NjU0MmJmZmU0NWU5OGMyMGQ2MDNlYmUyYmExMTc2ZWRhMzMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRG91Z2xhcyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9zb2xpZGVzLTM3Y2IyIiwiYXVkIjoic29saWRlcy0zN2NiMiIsImF1dGhfdGltZSI6MTU5MjY4NDczNiwidXNlcl9pZCI6Ik1oM1BZczJickVTZnJqTTMzbjR3Vmc3RUo1RzIiLCJzdWIiOiJNaDNQWXMyYnJFU2Zyak0zM240d1ZnN0VKNUcyIiwiaWF0IjoxNTkyNjg0NzM2LCJleHAiOjE1OTI2ODgzMzYsImVtYWlsIjoiZG91Z2xhc3Rlc3RlQGVtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJkb3VnbGFzdGVzdGVAZW1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.QRGAlCLT_UZwr3Gwa1lxEULSgc6x6nVbZjHfia6vB8uFmhtAkM4fWOgpBlU8ngeOq0lMBe90ffr0WY7spWHKqCDhdUj8KgkqyW201__zt7JyUXdl9Z0XPRp08KEOgZ50m8fmc3FdslU8UTDcdonHjLrkID3G0MTYkjsEgpXWRo-_SAjKTg0nz0jhpljvkGWgzyRHaTOdnWDqmLH2-aTL2E2bovA94SkQssOEO5g7Jf3t4rlGjghoxUTWxKxhIwWqsXriR0INZ1Z2z65BFAK9M9bgf47JAYw_rmUxkRtnOzlWWR9rEQHxreQtw2c_aeS1szo23M2IcKLJANs35-08ww'
  //   );
  //   console.log(res);
  // };

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
