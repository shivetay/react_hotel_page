import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
