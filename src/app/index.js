import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Header from './header'
import FeaturingNumbers from './featuring-numbers'


const styles = StyleSheet.create({
  base: {
    'margin': '0 auto',
    'max-width': '1028px',
    'text-align': 'center',
    'font-family': "'Open Sans', Helvetica, Verdana", 
  }
})


export default () => {
  return (
    <div className={css(styles.base)}>
      <Header />
      <FeaturingNumbers />
    </div>
  )
}
