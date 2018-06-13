import React from 'react'

const Message = (props) =>{
    return(
        <div className="Message" style={{...styles.Message, ...styles.details,}}>
            {props.message.userName}: {props.message.body}
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