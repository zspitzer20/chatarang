import React from 'react'
import {StyleSheet, css } from 'aphrodite'
import { NavLink } from 'react-router-dom'


const RoomLink = ({ channel }) => {

    return(
        <li className={css(styles.item)}>
        <NavLink to={`/rooms/${channel.name}`}
        className={css(styles.link)}
        >
        { channel.name }</NavLink>
        </li>
    )
}

const styles = StyleSheet.create({
    item: {
        marginBottom: '0.5rem',
      },
    
      link: {
        display: 'block',
        color: 'whitesmoke',
        textDecoration: 'none',
    
        '::before': {
          content: '"# "',
        },
    
        ':hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
        }
      },
})

export default RoomLink