import React, { Component } from 'react';
import './App.css';

import Main from './Main'

class App extends Component {
  state  ={
    user: {
      uid: '69420247',
      userName: 'zach',

    },
  }
  render() {
    return (
      <div className="App">
        <Main user={this.state.user}/>
      </div>
    );
  }
}

export default App;
