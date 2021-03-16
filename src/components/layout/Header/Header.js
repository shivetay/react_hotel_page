import React from 'react';

import './Header.scss';

import Navigation from '../../views/Navigation/Navigation';
import Logo from '../../common/Logo/Logo';

const Header = () => {
  return (
    <header className='Header'>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
