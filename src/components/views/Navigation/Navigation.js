import React, { Component } from 'react';

import './Navigation.scss';

import NavBar from './NavBar';
import MobileNav from './MobileNav';
import SideDrawer from '../../common/SideDrawer/SideDrawer';
import BackDrop from '../../common/BackDrop/BackDrop';

class Navigation extends Component {
  state = {
    isOpen: false,
  };

  openDrawer = () => {
    this.setState({ isOpen: true });
  };
  closeDrawer = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <nav className='Navigation'>
        <NavBar className={'Navigation'} />
        <button onClick={this.openDrawer} className='Navigation-btn'>
          <span />
          <span />
          <span />
        </button>
        {isOpen && <BackDrop onClick={this.closeDrawer} />}
        <SideDrawer onClick={this.closeDrawer} show={isOpen}>
          <MobileNav className={'Navigation'} />
        </SideDrawer>
      </nav>
    );
  }
}

export default Navigation;
