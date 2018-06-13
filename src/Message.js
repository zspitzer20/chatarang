import React from 'react'

import Avatar from './Avatar'
import Metadata from './Metadata'

const Message = ({ message}) =>{
    return(
<div className="Message" style={styles.message}>
          <Avatar user={message.user} />
          <div class="details" style={styles.details}>
            <Metadata message={message} />
            <div class="body">
                {message.body}
            </div>
          </div>
        </div>

    )
}

const styles = {
    Message: {
        display: 'flex',
        marginTop: '1rem',
        padding: '0 1rem',
    },

    details: {
        flex: '1',
        paddingLeft: '0.5rem',
    },
}

export default Message