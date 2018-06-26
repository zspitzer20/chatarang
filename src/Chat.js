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
            rebaseBinding: null,
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
            id: `${this.props.user.uid}-${Date.now()}`,
            user: this.props.user,
            body: body,
            createdAt: Date.now(),
        })
// Rather than body: body, body works
        this.setState({ messages })
    }

    addReaction = (message, emoji) => {
        message.reactions = message.reactions || {}
        message.reactions[emoji] = message.reactions[emoji] || []
    
        message.reactions[emoji].push(this.props.user)
    
        const messages = [...this.state.messages]
        const i = messages.findIndex(msg => msg.id === message.id)
        messages[i] = message
    
        this.setState({ messages })
      }

    render(){
        return(
            <div className="Chat" style={styles}>
                <ChatHeader channel={this.props.channel}
                removeChannel={this.props.removeChannel}/>
                <MessageList messages={this.state.messages}
                user={this.props.user}
                channel={this.props.channel}
                addReaction={this.addReaction}/>
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