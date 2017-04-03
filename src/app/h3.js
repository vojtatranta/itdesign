import React from 'react'

import { StyleSheet, css } from 'aphrodite'
import { rem } from '../styles/vars'


const styles = StyleSheet.create({
  heading: {
    color: '#010101',
    fontWeight: 300,
    fontSize: rem(48),
  },
})

export default ({ children }) => {
  return (
    <h3 className={css(styles.heading)}>{children}</h3>
  )
}
