import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
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
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/folha" component={FolhaDePonto} isPrivate />
      </Switch>
    </>
  );
}
