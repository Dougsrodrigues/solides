import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/registrar" component={SignUp} />
      </Switch>
    </>
  );
}
