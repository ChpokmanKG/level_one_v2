import Axios from 'axios';

const http = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export default {
  getPosts: () => http.get('/posts/'),
  getUsers: () => http.get('/users/'),
  getOnePost: id => http.get(`/posts/${id}`),
  getCommentsForPost: id => http.get(`/comments?postId=${id}`),
  getOneUser: id => http.get(`/users/${id}`)
}