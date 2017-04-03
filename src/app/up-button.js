import React from 'react'

import { StyleSheet, css } from 'aphrodite'
import { rem } from '../styles/vars'


const styles = StyleSheet.create({
  upButton: {
    background: `no-repeat url(${require('../images/up-button.svg')})`,
    width: rem(56),
    height: rem(56),
    color: 'white',
    fontSize: rem(48),
    margin: `${rem(50)} 0`,
    textDecoration: 'none',
    display: 'inline-block',
  },
})

export default () => {
  return (
    <a href="#" className={css(styles.upButton)}>^</a>
  )
}
