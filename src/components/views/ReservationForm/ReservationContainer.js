import { connect } from 'react-redux';

import {
  fetchSearchRequest,
  roomLoading,
} from '../../../redux/ReservationReducer';
import ReservationMain from './ReservationMain';

const mapStateToProps = (state) => ({
  reservation: state.reservation,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  searchRooms: (pepole, beds) => dispatch(fetchSearchRequest(pepole, beds)),
  loading: () => dispatch(roomLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationMain);
