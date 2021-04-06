import { connect } from 'react-redux';

import { bookingPost, searchRoomRequest } from '../../../redux/BookingReducer';

import Booking from './Booking';

const mapStateToProps = (state) => ({
  room: state.room,
  loading: state.booking.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getRoom: (id) => dispatch(searchRoomRequest(id)),
  newBookign: (data) => dispatch(bookingPost(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
