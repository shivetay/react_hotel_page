import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import roomsReducer from './RoomsReducer';
import reservationReducer from './ReservationReducer';
import bookingReducer from './BookingReducer';
import alertReducer from './AlertReducer';

const initialState = {};

const reducers = {
  rooms: roomsReducer,
  reservation: reservationReducer,
  booking: bookingReducer,
  alerts: alertReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers
const storeReducer = combineReducers(reducers);

// create store
const store = createStore(
  storeReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
