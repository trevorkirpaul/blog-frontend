import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from 'containers/Header';
import Login from 'containers/Login';
import CreateUser from 'containers/CreateUser';
import Home from 'containers/Home';
import NotFound404 from 'containers/NotFound404';

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user/create" exact component={CreateUser} />
        <Route path="/user/login" exact component={Login} />
        <Route component={NotFound404} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default Router;
