import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faMale, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

import './Room.scss';

function Room({ roomData: { id, title, photo, type, people, price } }) {
  return (
    <Fragment>
      <div className='Room__Card' key={id}>
        <h3>{title}</h3>
        <div className='Room__Image'>
          <img src={photo} alt='roome_prev' />
        </div>
        <div className='Room__Description'>
          <div className='Room__Icons'>
            <FontAwesomeIcon className='icon' icon={faBed} />
            <span>{type}</span>
          </div>
          <div className='Room__Icons'>
            <FontAwesomeIcon className='icon' icon={faMale} />
            <span>{people}</span>
          </div>
          <div className='Room__Icons'>
            <FontAwesomeIcon className='icon' icon={faMoneyBill} />
            <span>{price} &#163;</span>
          </div>
        </div>
        <Link to='/reservation'>
          <button className='btn'>Book Now</button>
        </Link>
      </div>
    </Fragment>
  );
}

Room.propTypes = {
  roomData: PropTypes.object.isRequired,
};

export default Room;
