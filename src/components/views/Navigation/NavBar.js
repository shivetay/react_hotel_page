import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ className }) => {
  return (
    <Fragment>
      <ul className={className + '__List'}>
        <li className={className + '__List-li'}>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className={className + '__List-li'}>
          <NavLink to='/'>Rooms</NavLink>
        </li>
        <li className={className + '__List-li'}>
          <NavLink to='/'>Reservation</NavLink>
        </li>
        <li className={className + '__List-li'}>
          <NavLink to='/'>Contact</NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

NavBar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default NavBar;
