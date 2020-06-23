import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import { Container } from './styles';

export default function Input(props) {
  const { type, placeholder, name, icon: Icon, error } = props;

  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container isFocused={isFocused}>
      <div>
        {Icon && <Icon size={20} />}
        <Field
          type={type}
          placeholder={placeholder}
          name={name}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
      </div>
      <span>{error}</span>
    </Container>
  );
}

Input.defaultProps = {
  icon: undefined,
  error: undefined,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  icon: PropTypes.oneOfType([React.Component]),
};
