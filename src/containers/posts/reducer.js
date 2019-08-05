import {
  GET_ALL_POSTS,
  GET_ALL_POSTS_SUCCES,
  GET_ALL_USERS,
} from './action';

const initialState = {
  posts: [],
  users: [],
  loading: true
};

export default (state = initialState,action) => {
  switch(action.type) {
    
    case GET_ALL_POSTS:
      return {
        ...state,
        loading: true
      }

    case GET_ALL_POSTS_SUCCES:
      return {
        ...state,
        posts: action.payload,
      }
    
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }

    default:
      return state;
  }
}