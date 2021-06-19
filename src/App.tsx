import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MiddleProduct from './pages/MiddleProduct';
import MiddleSquare from './pages/MiddleSquare';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/middle-product">
        <MiddleProduct />
      </Route>
      <Route path="/middle-square">
        <MiddleSquare />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
