import { GET_POST, GET_POST_SUCCES, } from './get-post-action';
import { GET_COMMENTS, GET_COMMENTS_SUCCES } from './get-comments-action';
import { GET_USER,GET_USER_SUCCES } from './get-user-action';

const initialState = {
  getPostLoading: false,
  post: [],
  getCommentLoading: false,
  comments: [],
  getUserLoading: false,
  user: {}
}

export default (state = initialState, action) => {
  switch(action.type) {

    case GET_POST:
      return {
        ...state,
        getPostLoading: true
      }
    
    case GET_POST_SUCCES:
      return {
        ...state,
        getPostLoading: false,
        post: action.payload
      }

    case GET_COMMENTS:
      return {
        ...state,
        getCommentLoading: true,
      }

    case GET_COMMENTS_SUCCES:
      return {
        ...state,
        getCommentLoading: false,
        comments: action.payload
      }

    case GET_USER:
      return {
        ...state,
        getUserLoading: true
      }

    case GET_USER_SUCCES:
      return {
        ...state,
        getUserLoading: false,
        user: action.payload
      }

    default:
      return state;
  }
}