import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import RoomLink from './RoomLink'

class RoomList extends Component {
  state = {
    channel: {
      general: {
        name: 'general',
        description: 'Some general chat stuff.',
        messages: [],
      },

      random: {
        name: 'random',
        description: 'Some random shtuff.',
        messages: [],
      },

      }
    }
  render(){

    return (
        <nav className={`RoomList ${css(styles.nav)}`}>
        <h2 className={css(styles.h2)}>Rooms</h2>
        <ul className={css(styles.list)}>
           {Object.keys(this.state.channel).map(roomName => (
             <RoomLink key={roomName}
             channel={this.state.channel[roomName]}
             channelSet={this.props.channelSet}/>
           ))}
        </ul>
      </nav>
    )
  }
}

const styles = StyleSheet.create({
      nav: {
        padding: '0 1rem',
      },
    
      h2: {
        fontSize: '1rem',
      },
    
      list: {
        listStyle: 'none',
        marginLeft: 0,
        paddingLeft: 0,
      },
  
    })

    export default RoomList