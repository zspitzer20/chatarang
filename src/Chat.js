import React, { Component} from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

import base from './base'

class Chat extends Component {
    constructor(){
        super()

        this.state = {
            messages: [],
        }
    }

    componentWillMount() {
        this.syncMessages()
      }
    
      componentDidUpdate(prevProps) {
        if (prevProps.channel.name !== this.props.channel.name) {
          this.syncMessages()
        }
      }
    
      syncMessages = () => {
        if (this.state.rebaseBinding) {
          base.removeBinding(this.state.rebaseBinding)
        }
    
        const rebaseBinding = base.syncState(
          `${this.props.channel.name}/messages`,
          {
            context: this,
            state: 'messages',
            asArray: true,
          }
        )
    
        this.setState({ rebaseBinding })
      }
    addMessage = (body) => {
        const messages = [...this.state.messages]
        messages.push({
            id: Date.now(),
            user: this.props.user,
            body: body,
        })
// Rather than body: body, body works
        this.setState({ messages })
    }

    render(){
        return(
            <div className="Chat" style={styles}>
                <ChatHeader channel={this.props.channel}/>
                <MessageList messages={this.state.messages}
                user={this.props.user}
                channel={this.props.channel}/>
                <MessageForm addMessage = {this.addMessage}/>
            </div>
        )
    }
}

const styles = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
}
export default Chat