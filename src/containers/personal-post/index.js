import React from 'react';
import { connect } from 'react-redux';
import Avatar from '../../components/avatar';
import ComponentHeader from '../../components/component-header';
import { getPostThunk, } from './get-post-action';
import Comment from './components/comment';
import getCommentsThunk from './get-comments-action';
import { getUserThunk } from './get-user-action';

class PersonalPost extends React.Component {
  
  // this.props.match.params.userId

  componentWillMount() {
    const {id} = this.props.postAndComments.post;
    this.props.getPost(this.props.match.params.userId);
    this.props.getComments(this.props.match.params.userId);
    this.props.getUser(id);
  }

  showName() {
    const {getPostLoading} = this.props.postAndComments;
    const {title} = this.props.postAndComments.post;
    return getPostLoading ? <>Загрузка</> : <> {title} </>
  }

  showBody() {
    const {getPostLoading} = this.props.postAndComments;
    const {body} = this.props.postAndComments.post;
    return getPostLoading ? <>Загрузка</> : <> {body} </>
  }

  showComments() {
    const { getCommentLoading } = this.props.postAndComments;
    if(!getCommentLoading) {
      let comm = this.props.postAndComments.comments.map((item,idx) => {
        return <Comment email={item.email} name={item.name} body={item.body} key={idx}/>
      })
      return comm;
    }
  }

  showUserName() {
    const {user,getUserLoading} = this.props.postAndComments;
    return getUserLoading ? <>Загрузка</> : <>{user.name}</>
  }


  render() {
    return (
      <div className="posts">
        <ComponentHeader text="Пост"/>

        <div className="posts__post-wrap">
        <div className="posts__container">
          <div className="posts__header all-center">
            <div className="all-center">
            <Avatar />
              <strong>{this.showUserName()}</strong>
            </div>
            <button className="posts__subscribe">Подписаться</button>
          </div>
        </div>
  
        <div className="posts__container">
          <p className="posts__post-title second-title">
            {this.showName()}
          </p>
          <p className="posts__post-title">
            {this.showBody()}
          </p>
          </div>
        </div>
        <ComponentHeader text="Коментарии"/>
        {this.showComments()}
      </div>
    )
  }
}

const mapStateToProps = store => ({
  postAndComments: store.onePost
})

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(getPostThunk(id)),
  getComments: id => dispatch(getCommentsThunk(id)),
  getUser: id => dispatch(getUserThunk(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(PersonalPost);