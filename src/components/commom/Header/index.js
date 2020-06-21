import React, { memo, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import storage from 'redux-persist/lib/storage';
import firebase from '../../../services/firebase';

import { Container, Header, HeaderContent, NavHeader } from './styles';
import logoSvg from '../../../assets/logo.svg';

function HeaderComponent() {
  const [logOut, setLogOut] = useState(false);
  const signOut = () => {
    firebase.logout();
    storage.removeItem('persist:@PoisPontoUser');
    setLogOut(true);
  };

  return (
    <>
      {logOut && <Redirect to="/" />}
      <Container>
        <Header>
          <HeaderContent>
            <img src={logoSvg} alt="PoisPonto" />
            <NavHeader>
              <li>
                <Link to="/dashboard">Inicio</Link>
              </li>
              <li>
                <Link to="/folha">Folha de ponto</Link>
              </li>
              <li>
                <Link to="/sobrenos">Sobre nós</Link>
              </li>
              <button
                onClick={() => {
                  signOut();
                }}
                type="button"
              >
                <FiPower />
              </button>
            </NavHeader>
          </HeaderContent>
        </Header>
      </Container>
    </>
  );
}

export default memo(HeaderComponent);
