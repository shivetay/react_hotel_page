import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <Fragment>
        <p>slider</p>
        <p>oferta</p>
        <p>rezerwacje</p>
        <p>kontakt</p>
      </Fragment>
    );
  }
}

export default Home;
