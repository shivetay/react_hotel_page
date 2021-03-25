import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import AdminPanel from './components/views/AdminPanel/AdminPanel';
import Facilities from './components/views/Facilities/Facilities';
import Home from './components/views/Home/Home';
import Rooms from './components/views/Rooms/RoomsContainer';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/panel' component={AdminPanel} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/facilities' component={Facilities} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
