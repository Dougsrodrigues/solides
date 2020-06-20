import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, NavHeader } from './styles';
import logoSvg from '../../../assets/logo.svg';

function HeaderComponent() {
  return (
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
            <button type="button">
              <FiPower />
            </button>
          </NavHeader>
        </HeaderContent>
      </Header>
    </Container>
  );
}

export default memo(HeaderComponent);
