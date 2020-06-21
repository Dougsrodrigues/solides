import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ReactDOMRoute({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { userInfo } = useSelector((state) => state.signIn);

  console.log(userInfo);

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      props
      render={() => {
        return isPrivate === !!userInfo ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }} />
        );
      }}
    />
  );
}

ReactDOMRoute.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
ReactDOMRoute.defaultProps = {
  isPrivate: false,
};
