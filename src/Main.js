import React, { Component} from 'react'

import base from './base'
import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
    constructor() {
        super()
    
        this.state = {
          channel: {
              //name: '',
              //description: '',
          },
          channels: {},
        }
      }
    
    componentDidMount() {
        const { roomName } = this.props.match.params
        base.syncState(
            'channels',
            {
              context: this,
              state: 'channels',
              then: () => {
                  this.channelSet(roomName)
              },
            }
        )
    }

    componentDidUpdate(prevProps) {
    if (prevProps.match.params.roomName !== this.props.match.params.roomName) {
        this.channelSet(this.props.match.params.roomName)
    }
    }

    channelSet = (roomName) => {
        if(roomName === 'new') return null
        const channel = this.state.channels[roomName]
        if(channel) {this.setState({ channel })}
        else{
            this.loadValidChannel()
        }
      }

      loadValidChannel = () => {
          const roomName = Object.keys(this.state.channels)[0]
          this.props.history.push(`/rooms/${roomName}`)
      }
    render(){
        return(
            <div className="Main" style={styles}>
                <Sidebar user={this.props.user}
                    signOut={this.props.signOut}
                    channel={this.state.channel}/>
                <Chat user={this.props.user}
                    channel={this.state.channel}/>
            </div>
        )
    }
}

const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
}

export default Main