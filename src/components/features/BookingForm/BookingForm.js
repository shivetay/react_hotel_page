import React from 'react';

import ReservationDate from '../../views/ReservationForm/ReservationDate';

function BookingForm() {
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

export default BookingForm;
