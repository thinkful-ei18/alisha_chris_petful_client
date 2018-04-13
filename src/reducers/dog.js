import {FETCH_DOG_SUCCESS} from '../actions'

const initialState = {
  data: {},
  error: false,
  loading: false
}

export const dogReducer = (state=initialState, action) => {
  if (action.type === FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      error: false,
      loading: false
    })
  }

  return state;
}

export default dogReducer;