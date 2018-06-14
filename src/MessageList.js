import React from 'react'

import Message from './Message'

const MessageList = ({messages, channel, user}) => {
    return(
        <div className="MessageList" style={styles.MessageList}>
            <div className="roomAnnouncement" style={styles.announcement}>
                <h3 style={styles.h3}>Hello, {user.email}!</h3>
                <p>This is the very beginning of the #{channel.name} chat.</p>
            </div>
            {
                messages.map(msg => <Message key={msg.id} message={msg} />)
            }
        </div>
    )
}

const styles = {
    MessageList: {
        backgroundColor: 'white',
        flex: '1',
        paddingBottom: '1rem',
        overflowY: 'scroll',
    },
    announcement: {
        padding: '2rem 1rem',
      },
    
      h3: {
        fontSize: '1.5rem',
      },    
}

export default MessageList