import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Slider from '../../features/Slider/Slider';
import Offer from '../../common/Offer/Offer';
import Reservation from '../../common/Reservation/Reservation';

class Home extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <Fragment>
        <Slider />
        <Offer />
        <Reservation />
        <p>kontakt</p>
        <p>footer</p>
      </Fragment>
    );
  }
}

export default Home;
