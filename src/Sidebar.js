import React from 'react';
import UserInfo from './UserInfo'
import RoomList from './RoomList'
import DirectMessageList from './DirectMessageList'

const Sidebar = ({user, signOut, channel, users, channels, addRoom}) => {
    return(
        <aside className="Sidebar" style={styles.sidebar}>
      <UserInfo user={user} signOut={signOut}/>
      <h1 style={styles.h1}>XTBC 18</h1>
        <RoomList channel={channel}
        users={users}
        channels={channels}
        user={user}
        addRoom={addRoom}/>
        <DirectMessageList
        users={users}
        user={user}
        channels={channels}
        addRoom={addRoom}
      />
    </aside>

    )
}

const styles = {
    sidebar: {
        backgroundColor: '#333344',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '12rem',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
    },

    h1: {
            color: 'white',
            fontSize: '1.2rem',
            marginTop: '0',
            padding: '0 1rem',
        }
}

export default Sidebar