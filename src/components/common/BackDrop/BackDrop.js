import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './BackDrop.scss';

const BackDrop = ({ onClick }) => {
  return ReactDOM.createPortal(
    <div className='BackDrop' onClick={onClick}></div>,
    document.getElementById('backdrop-portal')
  );
};

BackDrop.propTypes = {
  onClick: PropTypes.func,
};

export default BackDrop;
