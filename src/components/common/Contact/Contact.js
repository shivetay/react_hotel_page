import React from 'react';

import './Contact.scss';

import logo from '../../../Images/logo.png';

function Contact() {
  return (
    <section>
      <div className='Contact'>
        <div className='Contact__Container'>
          <div className='Contact__Text'>
            <div className='Contact__Text-contet'>
              <img className='Logo__Img' src={logo} alt='bohho_logo' />
              <p>Lairg IV27 4QA, Wielka Brytania</p>
            </div>
          </div>
          <div className='Contact__Image'>
            <img
              src='https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=653&q=80'
              alt='bacground_reservation'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
