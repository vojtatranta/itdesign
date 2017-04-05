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
    fontFamily: "'Open Sans', Helvetica, Verdana",
    fontWeight: 300,
  },
})


export default () => {
  return (
    <div className={css(styles.base)}>
      <Header />
      <FeaturingNumbers />
      <TaxRefundInfo />
      <Posts />
      <UpButton />
      <Contact />
    </div>
  )
}
