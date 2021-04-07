import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ReservationContainer from './components/views/ReservationForm/ReservationContainer';
import MainLayout from './components/layout/MainLayout/MainLayout';
import AdminPanel from './components/views/AdminPanel/AdminPanel';
import Facilities from './components/views/Facilities/Facilities';
import Home from './components/views/Home/Home';
import Rooms from './components/views/Rooms/RoomsContainer';
import BookingContainer from './components/views/Booking/BookingContainer';
import Alert from './components/common/Alert/AlertContainer';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Alert />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/panel' component={AdminPanel} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/facilities' component={Facilities} />
          <Route exact path='/reservation' component={ReservationContainer} />
          <Route exact path='/booking' component={BookingContainer} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
