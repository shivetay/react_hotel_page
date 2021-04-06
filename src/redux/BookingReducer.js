import axios from 'axios';

const url =
  '//' +
  window.location.hostname +
  (window.location.hostname === 'localhost' ? ':4000' : '');

/* action creator name */

const reducerName = 'booking';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
export const CREATE_BOOKING = createActionName('CREATE_BOOKING');
export const CREATE_SUCCESS = createActionName('CREATE_SUCCESS');
export const CREATE_FAILED = createActionName('CREATE_FAILED');

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

/* thunk */
export const bookingPost = (bookingData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://${url}/booking`, bookingData);
      dispatch(createBookingAction(res.data));
      dispatch(createSuccess({ name: 'CREATE_BOOKING' }));
    } catch (err) {
      dispatch(createFailed({ name: 'CREATE_BOOKING', error: err.message }));
    }
  };
};

/* initial state */
const initialState = {
  booking: [],
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
    default:
      return state;
  }
}
