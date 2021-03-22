import { connect } from 'react-redux';

import { fetchRoomsRequest } from '../../../redux/RoomsReducer';
import Rooms from './Rooms';

const mapStateToProps = (state) => ({
  rooms: state.rooms,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getRooms: () => dispatch(fetchRoomsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
