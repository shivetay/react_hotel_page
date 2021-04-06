import axios from 'axios';

const url =
  '//' +
  window.location.hostname +
  (window.location.hostname === 'localhost' ? ':4000' : '');

/* action creator name */

const reducerName = 'rooms';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */

export const FETCH_ROOMS = createActionName('FETCH_ROOMS');
export const ERROR_LOADING = createActionName('ERROR_LOADING');
export const SEARCH_ROOM = createActionName('SEARCH_ROOM');

/* action creators */

export const fetchRooms = (payload) => ({ payload, type: FETCH_ROOMS });
export const errorLoading = (payload) => ({ payload, type: ERROR_LOADING });
export const searchRoom = (payload) => ({ payload, type: SEARCH_ROOM });

/* thunk */

export const fetchRoomsRequest = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://${url}/rooms`);
      dispatch(fetchRooms(res.data));
    } catch (err) {
      dispatch(errorLoading({ name: 'FETCH_ROOMS', error: err.message }));
    }
  };
};

export const searchRoomRequest = (roomId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://${url}/rooms/${roomId}`);
      dispatch(searchRoom(res.data));
    } catch (err) {
      dispatch(errorLoading({ name: 'FETCH_ROOMS', error: err.message }));
    }
  };
};

/* initial state */
const initialState = {
  rooms: [],
  room: [],
  loading: false,
};

/* reducer */

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_ROOMS:
      return { ...state, rooms: action.payload, loading: false };

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
