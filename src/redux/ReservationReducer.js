import axios from 'axios';

const url =
  '//' +
  window.location.hostname +
  (window.location.hostname === 'localhost' ? ':4000' : '');

/* action creator name */

const reducerName = 'reservation';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */

export const SEARCH_ROOMS = createActionName('SEARCH_ROOMS');
export const ERROR_LOADING = createActionName('ERROR_LOADING');
export const LOAD_SUCCESS = createActionName('LOAD_SUCCESS');
export const ROOM_LOADING = createActionName('ROOM_LOADING');

/* action creators */

export const searchRooms = (payload) => ({ payload, type: SEARCH_ROOMS });
export const errorLoading = (payload) => ({ payload, type: ERROR_LOADING });
export const loadSuccess = (payload) => ({ payload, type: LOAD_SUCCESS });
export const roomLoading = (payload) => ({ payload, type: ROOM_LOADING });

/* thunk */

export const fetchSearchRequest = (peopleId, bedType) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost:localhost:4000/rooms?people=${peopleId}`
      );
      dispatch(searchRooms(res.data));
      dispatch(loadSuccess({ name: 'LOAD_SUCCESS' }));
    } catch (err) {
      dispatch(errorLoading({ name: 'SEARCH_ROOMS', error: err.message }));
    }
  };
};

/* initial state */
const initialState = {
  rooms: [],
  loading: true,
};

/* reducer */

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ROOMS:
      return { ...state, rooms: action.payload, loading: true };

    case ERROR_LOADING:
      return {
        ...state,
        error: action.payload,
      };

    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case ROOM_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
}
