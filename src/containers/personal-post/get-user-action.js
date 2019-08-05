import API from '../../API';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCES = 'GET_USER_SUCCES';

const getUser = () => ({
  type: GET_USER
})

const getUserSucces = user => ({
  type: GET_USER_SUCCES,
  payload: user
})

export const getUserThunk = id => dispatch => {
  dispatch(getUser());
  return API.getOneUser(id)
    .then(res => {
      dispatch(getUserSucces(res.data));
      console.log(res.data);
    })
    .catch(err => {
      console.log('Чика пиздец')
      console.error(err);
    })
}