import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { toast } from 'react-toastify';

import firebase from '../../services/firebase';
import { Container, FormContent, Background } from './styles';
import Input from '../../components/commom/Input';
import Button from '../../components/commom/Button';
import signUpSchema from './ValidationSchema';

import Logo from '../../assets/logo.svg';

export default function SignUp() {
  const handleRegisterUser = async (values) => {
    const { name, email, password } = values;
    try {
      await firebase.register(name, email, password);

      toast.success('usuario registrado');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Container>
      <FormContent>
        <img src={Logo} alt="PoisPonto" />
        <h1>Olá, Seja bem vindo de volta</h1>

        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={signUpSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              handleRegisterUser(values);
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {({ handleSubmit, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Nome:"
                error={errors.name}
                icon={FiUser}
              />
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

              <Button type="submit" textButton="Registrar" />
              <div>
                <Link to="/">Já tenho uma conta.</Link>
              </div>
            </Form>
          )}
        </Formik>
      </FormContent>
      <Background />
    </Container>
  );
}
