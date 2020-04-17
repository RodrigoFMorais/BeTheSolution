import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Registro from './pages/Registro';


export default function() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/registro" component={Registro} />
      </Switch>
    </BrowserRouter>
  );
}