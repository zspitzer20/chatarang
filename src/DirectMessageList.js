import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Route, Switch, Link } from 'react-router-dom'

import RoomLink from './RoomLink'
import DirectMessageForm from './DirectMessageForm'

class DirectMessageList extends Component {
  render() {
    const channels = this.props.channels.filter(channel => channel.dm)

    return (
      <Switch>
        <Route
          path="/rooms/new-direct-message"
          render={navProps => (
            <DirectMessageForm
              addRoom={this.props.addRoom}
              users={this.props.users}
              user={this.props.user}
              {...navProps}
            />
          )}
        />
        <Route
          render={
            () => (
              <nav
                className={`RoomList ${css(styles.nav)}`}
              >
                <div className={css(styles.heading)}>
                  <h2 className={css(styles.h2)}>
                    Direct Messages
                  </h2>
                  <Link
                    className={css(styles.button)}
                    to="/rooms/new-direct-message"
                  >
                    <i className="fas fa-plus-circle" title="New direct message"></i>
                  </Link>
                </div>
                <ul className={css(styles.list)}>
                  {
                    Object.keys(channels).map(
                      roomName => (
                        <RoomLink
                          key={roomName}
                          channel={channels[roomName]}
                        />
                      )
                    )
                  }
                </ul>
              </nav>
            )
          }
        />
      </Switch>
    )
  }
}

const styles = StyleSheet.create({
  nav: {
    padding: '0 1rem',
  },

  h2: {
    fontSize: '1rem',
  },

  list: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },

  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    border: 0,
    backgroundColor: 'transparent',
    outline: 0,
    padding: 0,
    color: 'rgba(255,255,255,0.4)',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'color 0.25s ease-out',

    ':hover': {
      color: 'white',
    }
  },
})

export default DirectMessageList