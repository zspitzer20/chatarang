import React, { Component } from 'react';
import './App.css';

import SignIn from './SignIn'
import Main from './Main'

class App extends Component {
  state = {
    user: {},
    channel: {
      name: 'general',
      description: 'Announcements and general chat',
    }
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      this.setState({ user })
    }
  }

  handleAuth = (user) => {
    this.setState({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }

  signedIn = () => {
    return this.state.user.uid
  }

  signOut = () => {
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
        : <SignIn handleAuth={this.handleAuth}/>}
      </div>
    );
  }
  // ReactDOM.render(
  //   this.state.channel,
  //   document.getElementById('root')
  // );
}

export default App;
