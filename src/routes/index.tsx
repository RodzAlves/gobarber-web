import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
