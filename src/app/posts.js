import React from 'react'

import { StyleSheet, css } from 'aphrodite'
import { rem } from '../styles/vars'

const styles = StyleSheet.create({
  postsContainer: {
    textAlign: 'center',
    marginTop: rem(104),
    paddingBottom: rem(55),
  },
})


export default ({ posts }) => {
  return (
    <div className={css(styles.postsContainer)} id="posts" dangerouslySetInnerHTML={{ __html: posts }} />
  )
}
