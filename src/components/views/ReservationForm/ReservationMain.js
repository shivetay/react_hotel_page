import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReservationForm from './ReservationForm';

class ReservationMain extends Component {
  state = {
    formData: {
      people: '',
      beds: '',
    },
  };
  static propTypes = {
    searchRooms: PropTypes.func,
    rooms: PropTypes.object.isRequired,
    loading: PropTypes.bool,
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

  render() {
    const { searchRooms, loading, rooms } = this.props;
    const { ...formData } = this.state;
    console.log(rooms, loading, 'pr');
    return (
      <section>
        <ReservationForm
          roomData={rooms}
          formData={formData}
          roomsSearch={searchRooms}
          loading={loading}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
      </section>
    );
  }
}

export default ReservationMain;
