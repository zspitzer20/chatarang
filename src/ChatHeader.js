import React from 'react'

const ChatHeader = (props) => {
        return(
            <div className="ChatHeader" style={styles.ChatHead}>
                <div className="roomInfo">
                    <h2 style={styles.h2}>#{props.channel}</h2>
                    <p style={styles.p}>
                    Announcements and general chat</p>
                </div>
            </div>
        )
}

const styles = {
    ChatHead: {
        backgroundColor: '#f3f3f3',
        borderBottom: '1px solid #ccc',
        height: '3rem',
        padding: '0 1rem',
        display: 'flex',
        alignItems: 'center',
    },

    h2: {
        fontSize: '1.1rem',
        margin: '0',
    },

    p: {
        color: '#999',
        margin: '0',
        fontSize: '0.8rem',
    },
}
export default ChatHeader