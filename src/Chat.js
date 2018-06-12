import React, { Component} from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
    constructor(){
        super()

        this.state = {
            messages: [
                {
                    id : 1,
                    userName: 'zspitzer',
                    body: 'Sup Planet Earth',
                },
                {
                    id: 2,
                    userName: 'yolo$wag',
                    body: 'Sup, brah',
                },
            ],
        }
    }

    addMessage = (body) => {
        const messages = [...this.state.messages]
        messages.push({
            id: Date.now(),
            userName: 'anotherName',
            body: body,
        })
// Rather than body: body, body works
        this.setState({ messages })
    }

    render(){
        return(
            <div className="Chat">
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm addMessage = {this.addMessage}/>
            </div>
        )
    }
}

export default Chat