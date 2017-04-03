import React from 'react'

import { StyleSheet, css } from 'aphrodite'
import { rem } from '../styles/vars'

import H3 from './h3'


const styles = StyleSheet.create({
  heading: {
    color: '#010101',
    fontWeight: 300,
    fontSize: rem(48),
  },
})


export default () => {
  return (
    <div className={css(styles.contactContainer)}>
      <H3>Kontakty</H3>
    </div>
  )
}
