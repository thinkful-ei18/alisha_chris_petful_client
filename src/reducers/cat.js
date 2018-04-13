import FETCH_CAT_SUCCESS from '../actions'

const initialState = {
  data: {
    "imageURL":"https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg", 
    "imageDescription": "Orange bengal cat with black stripes lounging on concrete.",
    "name": "Fluffy",
    "sex": "Female",
    "age": "2",
    "breed": "Bengal",
    "story": "Thrown on the street"
  },
  error: false,
  loading: false
}

export const catReducer = (state=initialState, action) => {

  if (action.type === FETCH_CAT_SUCCESS) {
    return {
      data: action.data,
      error: false,
      loading: false
    }
  }

  return state;
}

export default catReducer;