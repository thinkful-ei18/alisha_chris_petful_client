import {API_BASE_URL} from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST'; 
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST,
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS'; 
export const fetchDogSuccess = data => ({
  type: FETCH_DOG_SUCCESS,
  data
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR'; 
export const fetchDogError = () => ({
  type: FETCH_DOG_ERROR,
});

export const fetchDog = dog => (dispatch) => {
  dispatch(fetchDogRequest());
  return fetch(`${API_BASE_URL}/dog`, {
    method: 'GET',
  })
    .then(res => {
      return res.json();
    })
    .then(dog => {
      dispatch(fetchDogSuccess(dog));
    })
    .catch(err => {dispatch(fetchDogError(err))});
}

export const adoptDog = dog => (dispatch) => {
  return fetch(`${API_BASE_URL}/dog`, {
    method: 'DELETE',
  })
    .then(res => {
      return res.json();
    })
    .then(dog => {
      dispatch(fetchDogSuccess(dog));
    })
}