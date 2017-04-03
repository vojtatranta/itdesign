import React from 'react'

import { rem } from '../styles/vars'
import { StyleSheet, css } from 'aphrodite'
import classNames from 'classnames'


const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    width: rem(910),
    margin: '0 auto',
  },
  numberContainer: {
    display: 'flex',
    flex: 1,
    maxWidth: rem(424),
    minWidth: '50%',
    marginBottom: rem(18),
  },
  number: {
    backgroundImage: `url(${require('../images/num-backg.svg')})`,
    width: rem(94),
    height: rem(100),
    display: 'flex',
    color: '#fff',
    fontWeight: 700,
    fontStyle: 'italic',
    fontSize: rem(169),
    lineHeight: rem(97),
  },
  numTextContainer: {
    marginLeft: rem(23),
    marginTop: rem(10),
    textAlign: 'left',
    color: '#010101',
    fontSize: rem(18),
  },
  numHeading: {
    margin: 0,
    fontWeight: 300,
    marginBottom: rem(10),
    fontSize: rem(36),
    lineHeight: rem(36),
  },
  numDescription: {
    margin: 0,
  },
  numBottom: {
    marginTop: rem(27),
  },
})


const Num = ({ bottom, number, heading, text, children }) => {
  return (
    <div className={css(styles.numberContainer)}>
      <div className={css(styles.number)}>
        {number}
      </div>
      <div className={css(styles.numTextContainer, bottom && styles.numBottom)}>
        <h2 className={css(styles.numHeading)}>{heading}</h2>
        {text && <p className={css(styles.numDescription)}>{text}</p>}
        {!text && children}
      </div>
    </div>
  )
}

export default () => {
  return (
    <div className={css(styles.flex)}>
      <Num number={1} heading="Webdesign">
        <p className={css(styles.numDescription)}>
          návrhy a realizace webů<br />a webových aplikací
        </p>
      </Num>
      <Num
        number={2}
        heading="Správa webů"
        text="aktualizace obsahu, úpravy vzhledu i funkcí - redesign webů"
      />
      <Num
        bottom
        number={3}
        heading="Tvorba obsahu a správa online komunikace"
        text="na webu, sociálních sítích, i v e-mailingu"
      />
      <Num
        bottom
        number={4}
        heading="Konzultace a technický dozor"
      >
        <p className={css(styles.numDescription)}>
          plánování a řízení webových projektů<br />s důrazem na použitelnost, konzultace<br />v online marketingu
        </p>
      </Num>
    </div>
  )
}
