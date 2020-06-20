import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { FiMail, FiLock } from 'react-icons/fi';

import { Container, FormContent, Background } from './styles';
import Input from '../../components/commom/Input';
import Button from '../../components/commom/Button';
import Logo from '../../assets/logo.svg';
import signInSchema from './ValidationSchema';

export default function SignIn() {
  return (
    <Container>
      <FormContent>
        <img src={Logo} alt="PoisPonto" />
        <h1>Olá, Seja bem vindo de volta</h1>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={signInSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {({ handleSubmit, values, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="email"
                placeholder="E-mail:"
                error={errors.email}
                icon={FiMail}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password:"
                error={errors.password}
                icon={FiLock}
              />

              <Button type="submit" textButton="Entrar" />
              <div>
                <Link to="/">Esqueci a senha</Link>
                <Link to="/registrar">Registre-se</Link>
              </div>
            </Form>
          )}
        </Formik>
      </FormContent>
      <Background />
    </Container>
  );
}
