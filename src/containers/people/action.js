import API from '../../API';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_SUCCES = 'GET_ALL_USERS_SUCCES';

const getAllUsers = () => ({
  type: GET_ALL_USERS
})

const getAllUsersSucces = (users) => ({
  type: GET_ALL_USERS_SUCCES,
  payload: users
})

export const getAllUsersThunk = () => dispatch => {
  dispatch(getAllUsers());
  return API.getUsers()
    .then(res => {
      dispatch(getAllUsersSucces(res.data))
    })
    .catch(err => {
      console.log('Все, пиздец')
    })
}