import React from 'react';
import { Link } from 'react-router-dom';

import './Reservations.scss';

const Reservation = () => {
  return (
    <section>
      <div className='Reservation'>
        <div className='Reservation__Container'>
          <div className='Reservation__Image'>
            <img
              src='https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              alt='bacground_reservation'
            />
          </div>
          <div className='Reservation__Text'>
            <div className='Reservation__Text-contet'>
              <h2>Book your room now</h2>
              <p>
                Ad sed necessitatibus labore molestias nemo ea nobis dignissimos
                eos.
              </p>
              <Link to=''>
                <button className='btn'>Book!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
