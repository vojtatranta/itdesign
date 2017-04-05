import React from 'react'

import { StyleSheet, css } from 'aphrodite'
import { rem } from '../styles/vars'

import HTML from '../static.html'


const styles = StyleSheet.create({
  postsContainer: {
    textAlign: 'center',
    marginTop: rem(104),
    paddingBottom: rem(55),
  },
})


export default () => {
  return (
    <div className={css(styles.postsContainer)} dangerouslySetInnerHTML={{ __html: HTML }} />
  )
}
