import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

import logo from '../../../Images/logo.png';

const Logo = () => {
  return (
    <div className='Logo'>
      <Link to='/'>
        <img className='Logo__Img' src={logo} alt='bohho_logo' />
      </Link>
    </div>
  );
};

export default Logo;
