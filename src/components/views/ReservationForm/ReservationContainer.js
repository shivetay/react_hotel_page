import { connect } from 'react-redux';

import { fetchSearchRequest } from '../../../redux/ReservationReducer';
import ReservationMain from './ReservationMain';

const mapStateToProps = (state) => ({
  rooms: state.rooms,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  searchRooms: (pepole, beds) => dispatch(fetchSearchRequest(pepole, beds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationMain);
