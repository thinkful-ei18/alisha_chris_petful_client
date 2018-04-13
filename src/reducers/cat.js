import {FETCH_CAT_SUCCESS} from '../actions';

const initialState = {
  data: {},
  error: false,
  loading: false
}

export const catReducer = (state=initialState, action) => {
  if (action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      error: false,
      loading: false
    })
  }

  return state;
}

export default catReducer;