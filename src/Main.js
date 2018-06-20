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
        if(roomName === 'new' || roomName === 'new-direct-message') return null
        const channel = /*this.state.channels[roomName]*/this.channelList()
            .find(channel => channel.name === roomName)
        if(channel) {this.setState({ channel })}
        else{
            this.loadValidChannel()
        }
    }

    loadValidChannel = () => {
        const roomName = this.channelFilter().find(
            roomName => this.state.channels[roomName]
        )
        this.props.history.push(`/rooms/${roomName}`)
    }

    removeChannel = (channel) => {
        const channels = {...this.state.channels}
        channels[channel.name] = null

        this.setState(
            { channels },
            this.loadValidChannel,
        )
    }

    addRoom = (channel) => {
        const { user } = this.props
        if (!channel.public){
            channel.users.push({
                value: user.uid,
                label: `${user.displayName} (${user.email})`,
            })
        }

        if( channel.dm) {
            const userNames = channel.users.map(user => user.label.split(' ')[0])
            channel.displayName = userNames.join(', ')
            channel.name = channel.users.map(user => user.value).join('-')
        }

        const channels = {...this.state.channels}
        channels[channel.name] = channel
        this.setState({ channels })
    }

    channelList = () => {
        return this.channelFilter().map(roomName => this.state.channels[roomName])
    }

    channelFilter = () => {
        return Object.keys(this.state.channels).filter(roomName => {
            const channel = this.state.channels[roomName]
            if(!channel) return false
            return channel.public || this.userInclude(channel) 
        })
    }

    userInclude = (channel) => {
    const include = channel.users || []
    return include.find( userOption => userOption.value === this.props.user.uid)
    }

    render(){
        return(
            <div className="Main" style={styles}>
                <Sidebar user={this.props.user}
                    signOut={this.props.signOut}
                    channel={this.state.channel}
                    users={this.props.users}
                    channels={this.channelList()}
                    addRoom={this.addRoom}/>
                <Chat user={this.props.user}
                    channel={this.state.channel}
                    removeChannel={this.removeChannel}/>
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