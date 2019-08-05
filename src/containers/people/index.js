import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsersThunk } from './action';
import UserCard from './components/user-card';
import ComponentHeader from '../../components/component-header';

class People extends Component {

  showUsers() {
    const { user } = this.props.users;
    console.log(user);
      let userList = user.map((user,idx) => {
        return <UserCard key={idx} name={user.name} city={user.address.city} id={user.id}/>
      })
    return userList;
  }

  render() {
    return (
      <div className="people">
        <ComponentHeader text="Интересные люди"/>
        {this.showUsers()}
      </div>
    )
  }
}

const mapStateToProps = store => ({
  users: store.users
})

const mapDispatchToProps = dispatch => ({
  getUsers: dispatch(getAllUsersThunk())
})
 
export default connect(mapStateToProps,mapDispatchToProps)(People);