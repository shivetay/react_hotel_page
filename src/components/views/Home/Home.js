import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Slider from '../../features/Slider/Slider';

class Home extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <Fragment>
        <Slider />
        <p>oferta</p>
        <p>rezerwacje</p>
        <p>kontakt</p>
      </Fragment>
    );
  }
}

export default Home;
