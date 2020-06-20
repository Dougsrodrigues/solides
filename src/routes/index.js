import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import FolhaDePonto from '../pages/FolhaDePonto';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/registrar" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/folha" component={FolhaDePonto} />
      </Switch>
    </>
  );
}
