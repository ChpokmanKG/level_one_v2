import { combineReducers } from 'redux';
import Users from './containers/people/reducer';
import Posts from './containers/posts/reducer';
import OnePost from './containers/personal-post/reducer';

export default combineReducers({
  users: Users,
  posts: Posts,
  onePost: OnePost,
})