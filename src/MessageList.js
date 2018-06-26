import React, { Component } from 'react'
import Message from './Message'

class MessageList extends Component {
    componentDidUpdate(prevProps){
        if (prevProps.messages.length < this.props.messages.length){
            this.scrollToBottom()
        }
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({behavior: 'smooth'})
    }

    render() {
        const { messages, channel, user } = this.props
    return(
        <div className="MessageList" style={styles.MessageList}>
            <div className="roomAnnouncement" style={styles.announcement}>
                <h3 style={styles.h3}>Hello, {user.displayName}!</h3>
                {
                    channel.dm
                    ? <p style={styles.p}>This is the very beginning of your direct message.</p>
                    : <p style={styles.p}>This is the very beginning of the #{channel.name} chat.</p>
                }  
            </div>
            {
                messages.map(msg => (<Message key={msg.id} message={msg}
                addReaction={this.props.addReaction}/>))
            }
              <div ref={el => this.messagesEnd = el}></div>
        </div>
    )
    }
}

const styles = {
    MessageList: {
        backgroundColor: 'white',
        flex: '1',
        paddingBottom: '1rem',
        overflowY: 'scroll',
    },
    announcement: {
        padding: '2rem 1rem 10rem',
      },
    
      h3: {
        textAlign: 'center',
        fontSize: '1.5rem',
      },    
      p: {
          textAlign: 'center',
      }
}

export default MessageList