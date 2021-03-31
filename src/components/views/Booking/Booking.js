import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Booking.scss';

import ReservationDate from '../../views/ReservationForm/ReservationDate';

class Booking extends Component {
  static propTypes = {
    roomid: PropTypes.number.isRequired,
    newBookign: PropTypes.func,
  };
  state = {
    formData: {
      people: '',
      roomId: '',
      name: '',
      mail: '',
      start: '',
      end: '',
    },
  };

  // componentDidMount() {
  //   const { roomid } = this.props.location;
  //   // this.getRoomData(roomid);
  //   console.log(roomid);
  // }
  // componentDidUpdate(){

  // }

  getRoomData(roomData) {}

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
    const { newBookign } = this.props;

    e.preventDefault();
    newBookign(formData);
  };

  render() {
    const {
      formData: { people, roomId, name, mail },
    } = this.state;
    return (
      <section className='Booking'>
        <h1>Book Your Room</h1>
        <form className='Booking__Form' onSubmit={this.onSubmit}>
          <div className='Booking__Fields-container'>
            <div className='Booking__Fields'>
              <small className='form-text'>How many people?</small>
              <input
                className='input'
                type='text'
                name='people'
                value={people}
                onChange={this.onChange}
              />
            </div>
            <div className='Booking__Fields'>
              <small className='form-text'>Room</small>
              <input
                className='input'
                type='text'
                name='roomId'
                value={roomId}
                onChange={this.onChange}
              />
            </div>
            <div className='Booking__Fields'>
              <small className='form-text'>Name</small>
              <input
                className='input'
                type='text'
                name='name'
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div className='Booking__Fields'>
              <small className='form-text'>Email</small>
              <input
                className='input'
                type='text'
                name='mail'
                value={mail}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className='Booking__Fields-container'>
            <div className='Booking__Fields'>
              <small className='form-text'>Dates</small>
              <ReservationDate />
              <input
                type='submit'
                className='btn Booking-btn'
                value='Book your room'
              />
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default Booking;
