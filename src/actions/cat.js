import {API_BASE_URL} from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST'; 
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST,
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS'; 
export const fetchCatSuccess = cat => ({
  type: FETCH_CAT_SUCCESS,
  cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR'; 
export const fetchCatError = () => ({
  type: FETCH_CAT_ERROR,
});

export const fetchCat = cat => (dispatch) => {
  dispatch(fetchCatRequest());
  return fetch(`${API_BASE_URL}/cat`, {
    method: 'GET',
  })
    .then(res => {
      return res.json();
    })
    .then(cat => {
      dispatch(fetchCatSuccess(cat));
    })
    .catch(err => {dispatch(fetchCatError(err))});
}

export const adoptCat = cat => (dispatch) => {
  return fetch(`${API_BASE_URL}/cat`, {
    method: 'DELETE',
  })
    .then(res => {
      return res.json();
    })
    .then(() => {
      fetchCat();
    })
}