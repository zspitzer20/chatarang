import React, { Component } from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'

import './App.css';
import base, { auth } from './base'
import SignIn from './SignIn'
import Main from './Main'

class App extends Component {
  constructor(){
    super()
    const user = JSON.parse(localStorage.getItem('user')) || {}
    this.state = {
      user,
      users: {},
    }
  }

  componentDidMount() {
    base.syncState(
      'users',
      {
        context: this,
        state: 'users',
      }
    )

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
      photoUrl: authUser.photoURL,
    }
        const users = {...this.state.users}
        users[user.uid] = user

        this.setState({ user, users })
        localStorage.setItem('user', JSON.stringify(user))
  }

  signedIn = () => {
    return this.state.user.uid
  }

  signOut = () => {
    if (window.confirm('Are you sure you wish to sign out?')){
      auth.signOut()
    }
  }

  handleUnauth = () => {
    this.setState({ user: {} })
    localStorage.removeItem('user')
  }

  render() {
    const mainProps = {
      user: this.state.user,
      signOut: this.signOut,
      users: this.state.users,
    }
    return (
      <div className="App">
        <Switch>
          <Route path="/sign-in" 
          render={navProps => (
            this.signedIn()
              ? <Redirect to="/rooms/general" />
              : <SignIn />
          )}/>
          <Route
            path="/rooms/:roomName"
            render={navProps => (
              this.signedIn()
              ? <Main
              {...mainProps}
              {...navProps}
              />
              : <Redirect to="/sign-in" />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App;
