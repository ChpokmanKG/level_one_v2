import {
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCES
} from './action';

const initialState = {
  user: [],
  loading: true,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
      }

    case GET_ALL_USERS_SUCCES:
      return {
        ...state,
        user: action.payload,
        loading: false
      }

    default:
      return state;
  }
}