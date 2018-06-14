import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import RoomLink from './RoomLink'
import RoomForm from './RoomForm'

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

    },
    showRoomForm: false,
  }

  showRoomForm = () => {
    this.setState({ showRoomForm: true })
  }

  hideRoomForm = () => {
    this.setState({ showRoomForm: false})
  }

  addRoom = (channel) => {
    const channels = {...this.state.channel}
    channels[channel.name] = channel
    this.setState({ channel })
  }

  render(){
    if(this.state.showRoomForm){
      return <RoomForm hideRoomForm={this.hideRoomForm} />
    } else {
    return (
        <nav className={`RoomList ${css(styles.nav)}`}>
        <h2 className={css(styles.h2)}>Rooms</h2>
        <button className={css(styles.button)}
          onClick={this.showRoomForm}>
          <i className="fas fa-plus-circle" title="Add room"></i>
        </button>
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
  
      heading: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    
      button: {
        border: 0,
        backgroundColor: 'transparent',
        outline: 0,
        padding: 0,
        fontSize: '1rem',
        color: 'rgba(255,255,255, 0.4)',
        cursor: 'pointer',
        transition: 'color 0.25s ease-out',
    
        ':hover': {
          color: 'white',
        }
      },
    })

    export default RoomList