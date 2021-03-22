import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ className }) => {
  return (
    <ul className={className + '__List'}>
      <li className={className + '__List-li'}>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className={className + '__List-li'}>
        <NavLink to='/rooms'>Rooms</NavLink>
      </li>
      <li className={className + '__List-li'}>
        <NavLink to='/'>Facilities</NavLink>
      </li>
      <li className={className + '__List-li'}>
        <NavLink to='/'>Reservation</NavLink>
      </li>
    </ul>
  );
};

NavBar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default NavBar;
