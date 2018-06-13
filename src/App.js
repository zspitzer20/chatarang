import React, { Component } from 'react';
import './App.css';

import SignIn from './SignIn'
import Main from './Main'

class App extends Component {
  state  ={
    user: {},
  }

  handleAuth = (user) => {
    this.setState({ user })
  }

  signedIn = () => {
    return this.state.user.uid
  }

  signOut = () => {
    this.setState({
      user: {}
    })
  }

  render() {
    return (
      <div className="App">
        {this.signedIn() ? <Main user={this.state.user}/> : <SignIn handleAuth={this.handleAuth}/>}
      </div>
    );
  }
}

export default App;
