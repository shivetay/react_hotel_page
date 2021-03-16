import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Navigation.scss';

import NavBar from './NavBar';
import MobileNav from './MobileNav';

class Navigation extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  state = {
    drawerState: false,
  };

  render() {
    const { drawerState } = this.state;
    return (
      <nav className='Navigation'>
        <NavBar className={'Navigation'} />
      </nav>
    );
  }
}

export default Navigation;
