import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../components/avatar';

function UserCard(props) {
  return (
    <div className="people__user-card all-center">
      <div className="people__username-wrap all-center">
        <Avatar />
          <div className="people__name-wrap all-center">
            <p className="people__name">{props.name}</p>
            <p className="people__city">{props.city}</p>
          </div>
        </div>
      <Link to={`/users/${props.id}`}>Профиль</Link>
    </div>
  )
}

export default UserCard;