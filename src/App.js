import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ReservationContainer from './components/views/ReservationForm/ReservationContainer';
import MainLayout from './components/layout/MainLayout/MainLayout';
import AdminPanel from './components/views/AdminPanel/AdminPanel';
import Facilities from './components/views/Facilities/Facilities';
import Home from './components/views/Home/Home';
import Rooms from './components/views/Rooms/RoomsContainer';
import Booking from './components/views/Booking/BookingContainer';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/panel' component={AdminPanel} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/facilities' component={Facilities} />
          <Route exact path='/reservation' component={ReservationContainer} />
          <Route exact path='/booking' component={Booking} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
