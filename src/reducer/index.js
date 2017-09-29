import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST';

export const authorize = (email, password) => ({
  type: AUTH_REQUEST,
  payload: { email, password }
});

const initialState = {
  token: localStorage.getItem('socialProof.token'),
  user: localStorage.getItem('socialProof.user')
};

const authReducer = (state = initialState, { type, payload, user }) => {
  switch (type) {
    case AUTH_SUCCESS: {
      return { ...state, token: payload, user };
    }
    case AUTH_FAILURE: {
      return { ...state, error: payload }
    }
    case AUTH_LOGOUT: {
      return { ...state, token: null, user: null }
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  auth: authReducer,
  router: routerReducer,
  form: formReducer
});

export default reducer;