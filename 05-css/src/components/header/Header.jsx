import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>NavBar</h1>
      <button className='btn'>Login</button>
    </div>
  )
}

export default Header
