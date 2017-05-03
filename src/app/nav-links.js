import React from 'react'

import { StyleSheet, css } from 'aphrodite'
import { rem } from '../styles/vars'


const styles = StyleSheet.create({
  linksContainer: {
    margin: '94px auto 0',
    textAlign: 'center',
  },
  link: {
    display: 'inline-block',
    color: '#05908f',
    fontSize: rem(30),
    margin: `0 ${rem(25)}`,
    textDecoration: 'underline',
    ':hover': {
      textDecoration: 'none',
    },
  },
})


export default (props) => {
  return (
    <div className={css(styles.linksContainer)}>
      <a className={css(styles.link)}>Reference a informace</a>
      <a className={css(styles.link)}>Kontakty</a>
    </div>
  )
}
