import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MobileNav = ({ className }) => {
  return (
    <div className={className + '__Mobile'}>
      <ul className={className + '__Mobile-list'}>
        <li className={className + '__Mobile-li'}>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className={className + '__Mobile-li'}>
          <NavLink to='/rooms'>Rooms</NavLink>
        </li>
        <li className={className + '__Mobile-li'}>
          <NavLink to='/facilities'>Facilities</NavLink>
        </li>
        <li className={className + '__Mobile-li'}>
          <NavLink to='/reservation'>Reservation</NavLink>
        </li>
        <li className={className + '__Mobile-li'}>
          <NavLink to='/booking'>Booking</NavLink>
        </li>
      </ul>
    </div>
  );
};

MobileNav.propTypes = {
  className: PropTypes.string.isRequired,
};

export default MobileNav;
