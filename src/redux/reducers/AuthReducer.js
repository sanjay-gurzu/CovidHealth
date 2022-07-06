import {login, logout, register} from '../actions/auth';

const initialState = {
  Login: [],
  authToken: null,
  Register: [],
  ResetPassword: {},
  changePassword: {},
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case login:
      return {
        ...state,
        Login: action.payload,
      };

    case logout:
      return {
        Login: null,
      };
    case register:
      return {
        Register: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
