import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReservationForm from './ReservationForm';

class Reservation extends Component {
  render() {
    return (
      <section>
        <ReservationForm />
      </section>
    );
  }
}

Reservation.propTypes = {};

export default Reservation;
