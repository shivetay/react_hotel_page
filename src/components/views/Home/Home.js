import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Slider from '../../features/Slider/Slider';
import Offer from '../../common/Offer/Offer';
import Reservation from '../../common/Reservation/Reservation';
import Contact from '../../common/Contact/Contact';
import Footer from '../../layout/Footer/Footer'


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
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
