import React from 'react'

import Message from './Message'

const MessageList = () => {
    const messages = [
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
    ]
    return(
        <div className="MessageList">
            {
                messages.map(msg => <Message key={msg.id} message={msg} />)
            }
        </div>
    )
}

export default MessageList