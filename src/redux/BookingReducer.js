import axios from 'axios';

const url =
  '//' +
  window.location.hostname +
  (window.location.hostname == 'localhost' ? ':4000' : '');

/* action creator name */

const reducerName = 'booking';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
export const CREATE_BOOKING = createActionName('CREATE_BOOKING');
export const CREATE_SUCCESS = createActionName('CREATE_SUCCESS');
export const CREATE_FAILED = createActionName('CREATE_FAILED');
export const ERROR_LOADING = createActionName('ERROR_LOADING');
export const SEARCH_ROOM = createActionName('SEARCH_ROOM');
export const ROOM_LOADED = createActionName('ROOM_LOADED');

/* action creators */
export const createBookingAction = (payload) => ({
  payload,
  type: CREATE_BOOKING,
});
export const createFailed = (payload) => ({
  payload,
  type: CREATE_FAILED,
});
export const createSuccess = (payload) => ({
  payload,
  type: CREATE_SUCCESS,
});
export const errorLoading = (payload) => ({ payload, type: ERROR_LOADING });
export const searchRoom = (payload) => ({ payload, type: SEARCH_ROOM });
export const roomLoaded = (payload) => ({ payload, type: ROOM_LOADED });

/* thunk */
export const bookingPost = (bookingData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`https://${url}/booking`, bookingData);
      dispatch(createBookingAction(res.data));
      dispatch(createSuccess({ name: 'CREATE_BOOKING' }));
    } catch (err) {
      dispatch(createFailed({ name: 'CREATE_BOOKING', error: err.message }));
    }
  };
};

export const searchRoomRequest = (roomId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`https://${url}/rooms/${roomId}`);
      dispatch(searchRoom(res.data));
      dispatch(roomLoaded({ name: 'ROOM_LOADED' }));
    } catch (err) {
      dispatch(errorLoading({ name: 'FETCH_ROOMS', error: err.message }));
    }
  };
};

/* initial state */
const initialState = {
  booking: [],
  room: [],
  loading: true,
};

/* reducer */

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOKING:
      return {
        ...state,
        loading: false,
        booking: action.payload,
      };

    case CREATE_SUCCESS:
    case ROOM_LOADED:
      return {
        ...state,
        loading: false,
      };

    case CREATE_FAILED:
      return {
        ...state,
        loading: true,
        room: null,
      };
    case SEARCH_ROOM:
      return { ...state, room: action.payload, loading: false };
    case ERROR_LOADING:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
