import axios from 'axios';

/* action creator name */

const reducerName = 'reservation';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */

export const SEARCH_ROOMS = createActionName('SEARCH_ROOMS');
export const ERROR_LOADING = createActionName('ERROR_LOADING');
export const LOAD_SUCCESS = createActionName('LOAD_SUCCESS');

/* action creators */

export const searchRooms = (payload) => ({ payload, type: SEARCH_ROOMS });
export const errorLoading = (payload) => ({ payload, type: ERROR_LOADING });
export const loadSuccess = (payload) => ({ payload, type: LOAD_SUCCESS });
/* thunk */

export const fetchSearchRequest = (bedId, bedType) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:4000/rooms?beds=${bedId}`);
      console.log(res.data);
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

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH_ROOMS:
      return { ...state, rooms: action.payload, loading: false };

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

    default:
      return state;
  }
}
