import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px;
  background: #fff;
`;

export const HeaderContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  img {
    height: 60px;
  }
  button {
    background: transparent;
    border: 0;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const NavHeader = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: baseline;
  list-style-type: none;
  a {
    text-decoration: none;
  }
`;
