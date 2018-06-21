import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import Avatar from './Avatar'
import Metadata from './Metadata'

class Message extends Component {
    state = {
        showPicker: false,
    }

    togglePicker = () => {
        this.setState({ showPicker: !this.state.showPicker })
    }

    render (){
        const { message } = this.props

        return(
            <div className={`Message ${css(styles.message)}`}>
            <Avatar user={message.user} />
            <div className={css(styles.details)}>
                <Metadata message={message} />
                <div className="body">
                    {message.body}
                </div>
                <button className={css(styles.reactionButton)}>
                    <i className="far fa-smile"></i>
                </button>
                </div>
                {
                    this.state.showPicker &&
                    <Picker
                        showPreview={false}
                    />
                }
            </div>

        )
    }
}

const styles = StyleSheet.create({
    message: {
      display: 'flex',
      marginTop: '1rem',
      padding: '0 1rem',
      position: 'relative',
    },
  
    details: {
      flex: 1,
      paddingLeft: '0.5rem',
    },
  
    reactionButton: {
      border: 0,
      outline: 0,
      backgroundColor: 'transparent',
      padding: 0,
      fontSize: '1rem',
      color: '#ccc',
      cursor: 'pointer',
      position: 'absolute',
      top: '0.5rem',
      right: '0.5rem',
  
      ':hover': {
        color: '#3366ff',
      },
    },
  })

export default Message