import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Header from './header'
import FeaturingNumbers from './featuring-numbers'
import TaxRefundInfo from './tax-refund-info'


const styles = StyleSheet.create({
  base: {
    margin: '0 auto',
    maxWidth: '1028px',
    textAlign: 'center',
    fontFamily: "'Open Sans', Helvetica, Verdana", 
    fontWeight: 300,
  }
})


export default () => {
  return (
    <div className={css(styles.base)}>
      <Header />
      <FeaturingNumbers />
      <TaxRefundInfo />
    </div>
  )
}
