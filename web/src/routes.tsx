import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Video from './pages/Video';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/video' component={Video} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
