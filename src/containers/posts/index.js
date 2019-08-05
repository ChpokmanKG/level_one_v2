import React,{ Component } from 'react';
import { connect } from 'react-redux';
import ComponentHeader from '../../components/component-header';
import Post from './components/post-block';
import { getAllPostsThunk,getAllUsersThunk } from './action';

class PostsWrap extends Component {

  showPosts() {
    const { posts,users } = this.props.posts;
    console.log(users);
    if(users) {
      let allPosts = posts.map((item,idx) => {
        let name = users.map((itemFil,idx) => {
          if(itemFil.id === item.userId) {
            return itemFil.name;
          }
        })
        return <Post key={idx} title={item.title} id={item.id} name={name}/>
      })
      return allPosts;
    }
  }

  render() {
    const {loading} = this.props.posts;
    return (
      <div className="posts">
        <ComponentHeader text="Лента"/>
        {loading ? <p>Загрузка</p> : this.showPosts()}
      </div>
    )
  }
}

const mapStateToProps = store => ({
  posts: store.posts
});

const mapDispatchToProps = dispatch => ({
  getPosts: dispatch(getAllPostsThunk()),
  getUsers: dispatch(getAllUsersThunk())
})

export default connect(mapStateToProps,mapDispatchToProps)(PostsWrap);