import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../components/avatar';


class Post extends React.Component {

  render() {
    return (
      <div className="posts__post-wrap">
        <div className="posts__container">
          <div className="posts__header all-center">
            <div className="all-center">
            <Avatar />
              <strong>{this.props.name}</strong>
            </div>
            <button className="posts__subscribe">Подписаться</button>
          </div>
        </div>
  
        <div className="posts__container">
          <p className="posts__post-title">
            {this.props.title}
          </p>
            <Link className="posts__subscribe" to={`/posts/${this.props.id}/`}>Читать</Link>
          </div>
        </div>
    )
  }
}

export default Post;