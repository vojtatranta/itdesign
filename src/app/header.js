import React from 'react'

import { rem } from '../styles/vars'
import { StyleSheet, css } from 'aphrodite'


const styles = StyleSheet.create({
  headline: {
    margin: `0 auto ${rem(5)}`,
    fontSize: rem(36),
  },
  subheadline: {
    color: '#009700',
    fontWeight: '300',
    marginBottom: rem(70),
  }
})

export default () => {
  return (
    <div>
      <h1 className={css(styles.headline)}>Internet je prostor pro komunikaci.</h1>
      <h2 className={css(styles.subheadline)}>Rádi vám budeme tlumočit.</h2>
    </div>
  )
}
