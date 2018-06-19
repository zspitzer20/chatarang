import React from 'react'

const ChatHeader = ({ channel, removeChannel }) => {
    const handleClick = (ev) => {
        if(window.confirm('Are you sure?')){
            removeChannel(channel)
        }
    }
        return(
            <div className="ChatHeader" style={styles.ChatHead}>
                <div className="roomInfo">
                    <h2 style={styles.h2}>#{channel.name}</h2>
                    <p style={styles.p}>
                    {channel.description}</p>
                </div>
                <button style={styles.button}
                onClick={handleClick}>
                <i className="far fa-trash-alt"></i>
                </button>
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
        justifyContent: 'space-between',
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

    button: {
        border: 0,
        outline: 0,
        padding: 0,
        backgroundColor: 'transparent',
        cursor: 'pointer',
        color: 'rgba(0,0,0, 0.4)',
        fontSize: '1rem',
      },
}
export default ChatHeader