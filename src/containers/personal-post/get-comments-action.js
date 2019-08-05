import API from '../../API';

export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_SUCCES = 'GET_COMMENTS_SUCCES';

const getComments = () => ({
  type: GET_COMMENTS,
})

const getCommentsSucces = comments => ({
  type: GET_COMMENTS_SUCCES,
  payload: comments
})

const getCommentsThunk = id => dispatch => {
  dispatch(getComments());
  return API.getCommentsForPost(id)
    .then(res => {
      console.log(res.data);
      dispatch(getCommentsSucces(res.data))
    })
    .catch(err => {
      console.error(err)
    })
}

export default getCommentsThunk;