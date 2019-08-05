import API from '../../API';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_POSTS_SUCCES = 'GET_ALL_POSTS_SUCCES';
export const GET_ALL_USERS = 'GET_ALL_USERS';

const getAllPosts = () => ({
  type: GET_ALL_POSTS
});

const getAllPostsSucces = posts => ({
  type: GET_ALL_POSTS_SUCCES,
  payload: posts
});

const getAllUsers = users => ({
  type: GET_ALL_USERS,
  payload: users
})

export const getAllPostsThunk = () => dispatch => {
  dispatch(getAllPosts());
  return API.getPosts()
    .then(res => {
      dispatch(getAllPostsSucces(res.data));
    })
    .catch(err => {
      console.log('Ну все пиздец')
    })
};

export const getAllUsersThunk = () => dispatch => {
  return API.getUsers()
      .then(res => {
        dispatch(getAllUsers(res.data))
      })
}