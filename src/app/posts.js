import React from 'react'

import H3 from './h3'

import { StyleSheet, css } from 'aphrodite'
import { rem } from '../styles/vars'


const styles = StyleSheet.create({
  postsContainer: {
    textAlign: 'center',
    marginTop: rem(104),
    paddingBottom: rem(55),
  },
  post: {
    textAlign: 'left',
    width: rem(800),
    margin: '0 auto',
  },
  postHeading: {
    fontSize: rem(30),
    fontWeight: 400,
  },
  postBody: {
    fontSize: rem(24),
  },
  textLink: {
    textDecoration: 'underline',
    hover: {
      textDecoration: 'none',
    },
  },
})

export default () => {
  return (
    <div className={css(styles.postsContainer)}>
      <h2 className={css(styles.heading)}>Vybrané reference, projekty a informace</h2>
      <div className={css(styles.post)}>
        <H3>Web pro kavárnu</H3>
        <p className={css(styles.postBody)}>
          Dokončili jsme web nekuřácké kavárny a připravili grafický návrh letáku pro propragaci.
           <a className={css(styles.textLink)}>www.kavarna-roudna.cz</a>
        </p>
      </div>
    </div>
  )
}
