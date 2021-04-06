import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Rooms.scss';

import Room from './Room';

class Rooms extends Component {
  static propTypes = {
    getRooms: PropTypes.func,
    getOneRoom: PropTypes.func,
    rooms: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { getRooms } = this.props;
    getRooms();
  }

  renderRooms = () => {
    const {
      rooms: { rooms },
    } = this.props;
    return (
      <Fragment>
        {rooms.map((room) => (
          <Room key={room.id} roomData={room} />
        ))}
      </Fragment>
    );
  };
  render() {
    return (
      <section className='Rooms'>
        {this.renderRooms()}
        <div className='Reservation-btn'>
          <div className='Reservation-content'>
            <Link to='/reservation'>
              <button className='Reservation-btn'>
                <h2>Check more rooms!!</h2>
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Rooms;
