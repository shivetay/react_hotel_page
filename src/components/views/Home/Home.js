import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>nawigacja</p>
        <p>slider</p>
        <p>oferta</p>
        <p>rezerwacje</p>
        <p>kontakt</p>
      </div>
    );
  }
}

export default Home;
