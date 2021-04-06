import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Booking.scss';

class Booking extends Component {
  static propTypes = {
    roomId: PropTypes.object,
    newBookign: PropTypes.func,
    getRoom: PropTypes.func,
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
  //   const { ...roomId } = this.props.location;
  //   const { getRoom } = this.props;
  //   getRoom(roomId.roomId.rId);
  //   console.log(roomId.roomId.rId);
  // }

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
      formData: { people, roomId, name, mail, end, start },
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
              <select
                className='browser-default'
                name='roomId'
                value={roomId}
                onChange={this.onChange}>
                <option value='0'>* Select Room</option>
                <option value='1'>Scots simple</option>
                <option value='2'>Scots creative</option>
                <option value='3'>Scots comfort</option>
                <option value='4'>Scots home</option>
                <option value='5'>Scots cave</option>
              </select>
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
              <input
                className='Booking-calendar'
                type='date'
                id='end'
                name='start'
                value={start}
                onChange={this.onChange}
              />
              <input
                className='Booking-calendar'
                type='date'
                id='end'
                name='end'
                value={end}
                onChange={this.onChange}
              />
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
