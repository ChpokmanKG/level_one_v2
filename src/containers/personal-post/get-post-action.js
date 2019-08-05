import API from '../../API';

export const GET_POST = 'GET_POST';
export const GET_POST_SUCCES = 'GET_POST_SUCCES';

const getPost = () => ({
  type: GET_POST
})

const getPostSucces = post => ({
  type: GET_POST_SUCCES,
  payload: post
})

export const getPostThunk = id => dispatch => {
  dispatch(getPost());
  return API.getOnePost(id)
    .then(res => {
      console.log(res.data)
      dispatch(getPostSucces(res.data))
    })
    .catch(err => {
      console.error(err)
    })
}