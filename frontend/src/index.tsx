import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';

import Cadastro from './pages/Cadastro';
import Categoria from './pages/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro' component={Cadastro} />
      <Route path='/categoria' component={Categoria} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
