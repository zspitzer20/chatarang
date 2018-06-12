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

    addMessage = () => {
        const messages = [...this.state.messages]
        messages.push({
            id: Date.now(),
            userName: 'anotherName',
            body: 'If you or a loved one has been diagnosed with mesothelioma, you may be entitled to financial compensation',
        })

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