import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.scss';

const SideDrawer = ({ children, show, onClick }) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={1200}
      classNames='slide-in-right'
      mountOnEnter
      unmountOnExit>
      <aside onClick={onClick} className='SideDrawer'>
        {children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById('drawer-portal')
  );
};

SideDrawer.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SideDrawer;
