import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import MyProfile from './containers/profile';
import PersonalPost from './containers/personal-post';
import People from './containers/people/'
import PostsWrap from './containers/posts/';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container all-center container-around">
        <MyProfile />
        <Switch>
          <Route exact path="/" component={PostsWrap}/>
          <Route path="/posts/:userId/" component={PersonalPost}/>
        </Switch>
        <People />
      </div>
    </div>
  );
}

export default App;
