import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { FiMail, FiLock } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import firebase from '../../services/firebase';
import { Container, FormContent, Background } from './styles';
import Input from '../../components/commom/Input';
import Button from '../../components/commom/Button';
import Logo from '../../assets/logo.svg';
import signInSchema from './ValidationSchema';

export default function SignIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatchSignIn = useDispatch();

  const handleSignIn = async (values) => {
    const { email, password } = values;
    try {
      const res = await firebase.signIn(email, password);
      const token = await firebase.getIdToken();

      const data = {
        name: res.user.displayName,
        email: res.user.email,
        token,
      };

      dispatchSignIn({ type: 'SIGN_IN', data });
      setIsLoggedIn(true);
      toast.success('Logado com sucesso.');
    } catch (err) {
      toast.error('Login/senha inválidos.');
    }
  };

  return (
    <>
      {isLoggedIn && <Redirect to="/dashboard" />}
      <Container>
        <FormContent>
          <img src={Logo} alt="PoisPonto" />
          <h1>Olá, Seja bem vindo de volta</h1>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={signInSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                handleSignIn(values);
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {({ handleSubmit, errors }) => (
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
    </>
  );
}
