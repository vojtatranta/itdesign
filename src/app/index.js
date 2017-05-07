import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { rem } from '../styles/vars'

import Header from './header'
import FeaturingNumbers from './featuring-numbers'
import TaxRefundInfo from './tax-refund-info'
import Posts from './posts'
import UpButton from './up-button'
import Contact from './contact'


const styles = StyleSheet.create({
  base: {
    margin: '0 auto',
    maxWidth: rem(1028),
    textAlign: 'center',
    fontFamily: 'Helvetica, Verdana, sans-serif',
    fontWeight: 300,
  },
})


export default ({ posts }) => {
  return (
    <div id='base' className={css(styles.base)}>
      <Header />
      <FeaturingNumbers />
      <TaxRefundInfo />
      <Posts posts={posts} />
      <UpButton />
      <Contact />
      <UpButton />
    </div>
  )
}
