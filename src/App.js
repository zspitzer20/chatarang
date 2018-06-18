import React, { Component } from 'react';
import './App.css';
import { auth } from './base'
import SignIn from './SignIn'
import Main from './Main'

class App extends Component {
  state = {
    user: {},
    channel: {
    }
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      this.setState({ user })
    }

    auth.onAuthStateChanged(
      user => {
        if (user) {
          this.handleAuth(user)
        } else {
          this.handleUnauth()
        }
      }
    )
  }

  handleAuth = (authUser) => {
    const user = {
      email: authUser.email,
      uid: authUser.uid,
      displayName: authUser.displayName,
    }
        this.setState({ user })
        localStorage.setItem('user', JSON.stringify(user))
  }

  signedIn = () => {
    return this.state.user.uid
  }

  signOut = () => {
    auth.signOut()
  }

  handleUnauth = () => {
    this.setState({ user: {} })
    localStorage.removeItem('user')
  }

  channelGet = () => {
    return this.state.channel.name
  }

  channelSet = (channel) => {
    this.setState({ channel })
  }

  render() {
    return (
      <div className="App">
        {this.signedIn() 
        ? <Main user={this.state.user} 
        signOut={this.signOut}
        channel={this.state.channel}
        channelSet={this.channelSet}/> 
        : <SignIn />}
      </div>
    );
  }
}

export default App;
