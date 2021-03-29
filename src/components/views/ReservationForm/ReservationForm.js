import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Room from '../Rooms/Room';

import ReservationDate from './ReservationDate';

const ReservationForm = ({
  formData: { beds, people },
  roomsSearch,
  roomData,
  onSubmit,
  onChange,
  loading,
}) => {
  console.log(roomData, 'rd');
  const renderForm = () => {
    return (
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='input-field'>
          <select
            className='browser-default'
            name='people'
            value={people}
            onChange={onChange}>
            <option value='0'></option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
          <small className='form-text'>How many people?</small>
        </div>
        <div className='input-field'>
          <select
            className='browser-default'
            name='beds'
            value={beds}
            onChange={onChange}>
            <option value='Select Bed'>Select Bed</option>
            <option value='mix'>Mix</option>
            <option value='king'>King Size</option>
            <option value='single'>MERN</option>
          </select>
          <small className='form-text'>Select beds?</small>
        </div>
        <ReservationDate />
        <input type='submit' className='btn' value='Search rooms' />
      </form>
    );
  };

  const renderRooms = () => {
    if (loading === true || roomData === undefined) {
      console.log(roomData);
      return <h2>Search your Room!!</h2>;
    } else {
      return console.log('loading');

      //  {roomData.map((room) => (
      //     <Room key={room.id} roomData={room} />
      //   ))}
    }
  };

  return (
    <Fragment>
      <h1>Book your room</h1>
      {renderForm()}
      {renderRooms()}
    </Fragment>
  );
};

ReservationForm.propTypes = {
  roomsSearch: PropTypes.func,
  formData: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

export default ReservationForm;
