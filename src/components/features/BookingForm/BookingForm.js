import React from 'react';
import PropTypes from 'prop-types';

import ReservationDate from '../../views/ReservationForm/ReservationDate';

function BookingForm(props) {
  return (
    <section>
      <form className='Reservation__Form'>
        <div className='input-field'>
          <small className='form-text'>How many people?</small>
        </div>
        <div className='input-field'>
          <small className='form-text'>How many people?</small>
        </div>
        <div className='input-field'>
          <small className='form-text'>Room</small>
        </div>
        <ReservationDate />
        <ReservationDate />
      </form>
    </section>
  );
}

BookingForm.propTypes = {};

export default BookingForm;
