import React from 'react'

import { rem } from '../styles/vars'
import { StyleSheet, css } from 'aphrodite'
import classNames from 'classnames'


const styles = StyleSheet.create({
  taxRefundContainer: {
    margin: '0 auto',
    width: rem(493),
    marginTop: rem(49),
    display: 'flex',
    textAlign: 'left',
  },
  triangle: {
    backgroundImage: `url(${require('../images/triangle.svg')})`,
    color: `#fff`,
    fontSize: rem(106),
    fontStyle: 'italic',
    fontWeight: 700,
    minWidth: rem(94),
    minHeight: rem(83),
    lineHeight: rem(73),
    marginRight: rem(24),
    textAlign: 'center',
  },
  taxRefundTexts: {
    margin: 0,
  },
  taxRefundHeading: {
    margin: 0,
    fontSize: rem(24),
    fontWeight: 300,
  },
  taxRefundText: {
    margin: 0,
    marginTop: rem(15),
    fontSize: rem(14),
  }
})


export default () => {
  return (
    <div className={css(styles.taxRefundContainer)}>
      <div className={css(styles.triangle)}>!</div>
      <div className={css(styles.taxRefundTexts)}>
        <h2 className={css(styles.taxRefundHeading)}>Náhradní plnění</h2>
        <p className={css(styles.taxRefundText)}>
          naše služby můžete odebírat jako náhradní plnění
          dle §81 odst. 2, písm. b) Z. č. 435/2004 Sb., o zaměstnanosti
        </p>
      </div>
    </div>
  )
}
