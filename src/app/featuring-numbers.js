import React from 'react'

import { rem } from '../styles/vars'
import { StyleSheet, css } from 'aphrodite'


const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  numberContainer: {
    display: 'flex',
    flex: 1,
    minWidth: '50%',
  },
  number: {
    backgroundImage: `url(${require('../images/num-backg.svg')})`,
    width: rem(94),
    height: rem(100),
    color: '#fff',
    fontWeight: 700,
    fontStyle: 'italic',
    fontSize: rem(169),
    lineHeight: rem(97),
    marginBottom: rem(18),
  },
})


const Num = ({ number, text }) => {
  return (
    <div className={css(styles.number)}>
      {number}
    </div>
  )
}

export default () => {
  return (
    <div className={css(styles.flex)}>
      <div className={css(styles.numberContainer)}>
        <Num number={1} text='' />
      </div>
      <div className={css(styles.numberContainer)}>
        <Num number={2} text='' />
      </div>
      <div className={css(styles.numberContainer)}>
        <Num number={3} text='' />
      </div>
      <div className={css(styles.numberContainer)}>
        <Num number={4} text='' />
      </div>
    </div>
  )
}
