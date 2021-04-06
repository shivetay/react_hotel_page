import { connect } from 'react-redux';

import { fetchRoomsRequest } from '../../../redux/RoomsReducer';
import { searchRoomRequest } from '../../../redux/BookingReducer';
import Rooms from './Rooms';

const mapStateToProps = (state) => ({
  rooms: state.rooms,
  room: state.room,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getRooms: () => dispatch(fetchRoomsRequest()),
  getOneRoom: (id) => dispatch(searchRoomRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
