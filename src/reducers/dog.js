import FETCH_DOG_SUCCESS from '../actions'

const initialState = {
  data: {
    "imageURL": "http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
    "imageDescription": "A smiling golden-brown golden retreiver listening to music.",
    "name": "Zeus",
    "sex": "Male",
    "age": "3",
    "breed": "Golden Retriever",
    "story": "Owner Passed away"
  },
  error: false,
  loading: false
}

export const dogReducer = (state=initialState, action) => {

  if (action.type === FETCH_DOG_SUCCESS) {
    return {
      data: action.data,
      error: false,
      loading: false
    }
  }

  return state;
}

export default dogReducer;