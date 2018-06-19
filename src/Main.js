import React, { Component} from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
    constructor() {
        super()
    
        this.state = {
          channel: {
              //name: '',
              //description: '',
          }
        }
      }
    
    componentDidMount() {
    this.channelSet({
        name: this.props.match.params.roomName,
    })
    }

    componentDidUpdate(prevProps) {
    if (prevProps.match.params.roomName !== this.props.match.params.roomName) {
        this.channelSet({
        name: this.props.match.params.roomName,
        })
    }
    }

    channelSet = (channel) => {
        this.setState({ channel })
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