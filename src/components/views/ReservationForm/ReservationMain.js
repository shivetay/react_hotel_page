import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Reservation.scss';

import ReservationForm from './ReservationForm';
import Room from '../Rooms/Room';

class ReservationMain extends Component {
  state = {
    formData: {
      people: '',
      beds: '',
    },
  };

  componentDidMount() {
    const { loading } = this.props;
    loading();
  }

  static propTypes = {
    searchRooms: PropTypes.func,
    reservation: PropTypes.object.isRequired,
    loading: PropTypes.func,
  };

  onChange = (e) => {
    // setting formData in the state properly
    const { formData } = this.state;
    let newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    this.setState({
      formData: newFormData,
    });
  };

  onSubmit = (e) => {
    const { formData } = this.state;
    const { searchRooms } = this.props;
    e.preventDefault();

    searchRooms(formData.people, formData.beds);
  };

  renderRooms = () => {
    const {
      reservation: { loading, rooms },
    } = this.props;
    if (!loading) {
      return rooms.map((room) => {
        return <Room key={room.id} roomData={room} />;
      });
    } else {
      return <h1>Tell Us waht you need</h1>;
    }
  };

  render() {
    const {
      searchRooms,
      reservation: { loading, rooms },
    } = this.props;
    const { load, ...formData } = this.state;
    return (
      <section className='Reservation'>
        <ReservationForm
          roomsData={rooms}
          formData={formData}
          roomsSearch={searchRooms}
          loading={loading}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
        {this.renderRooms()}
      </section>
    );
  }
}

export default ReservationMain;
