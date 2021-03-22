import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rooms extends Component {
  static propTypes = {
    getRooms: PropTypes.func,
    rooms: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const { getRooms } = this.props;
    getRooms();
  }
  render() {
    const {
      rooms: { rooms },
    } = this.props;

    return (
      <div>
        <h2>Rooms</h2>
        {rooms.map((room) => (
          <p key={room.id}>{room.type}</p>
        ))}
      </div>
    );
  }
}

export default Rooms;
