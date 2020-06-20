import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Button(props) {
  const { textButton, type } = props;
  return (
    <Container>
      <button type={type}> {textButton}</button>
    </Container>
  );
}

Button.propTypes = {
  textButton: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
