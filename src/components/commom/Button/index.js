import React from 'react';
import PropTypes from 'prop-types';
import { ButtonComponent } from './styles';

export default function Button(props) {
  const { textButton, type, onClick } = props;
  return (
    <ButtonComponent type={type} onClick={onClick}>
      {textButton}
    </ButtonComponent>
  );
}

Button.propTypes = {
  textButton: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.oneOf([PropTypes.func]),
};
Button.defaultProps = {
  type: 'button',
  onClick: PropTypes.oneOf([PropTypes.func]),
};
