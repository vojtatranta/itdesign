import React from 'react'

import { StyleSheet, css } from 'aphrodite'
import { rem } from '../styles/vars'
import linkedIn from '../images/linked.jpg'


const styles = StyleSheet.create({
  heading: {
    color: '#010101',
    fontWeight: 300,
    marginBottom: 0,
    fontSize: rem(48),
  },

  subHeading: {
    color: '#010101',
    fontSize: rem(36),
    marginTop: 0,
    fontWeight: 300,
  },

  formGroup: {
    margin: `${rem(10)} 0`,
  },

  formControl: {
    fontSize: rem(14),
    padding: `${rem(18)} ${rem(17)}`,
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    width: '100%',
  },

  input: {
    height: rem(15),
  },

  formButtons: {
    textAlign: 'center',
    padding: `${rem(13)} 0`,
  },

  form: {
    maxWidth: rem(412),
    margin: '0 auto',
  },

  textarea: {
    minHeight: rem(290),
  },

  error: {
    color: '#b40455',
  },

  button: {
    backgroundColor: '#06e0e2',
    color: '#ffffff',
    fontSize: rem(20),
    fontWeight: 700,
    padding: `${rem(11)} ${rem(45)}`,
    lineHeight: rem(20),
    border: 'none',
  },
  disabled: {
    backgroundColor: '#424242',
  },

  copyright: {
    maxWidth: 338,
    margin: `${rem(40)} auto`,
    color: '#666666',
    textAlign: 'left',
    fontSize: rem(14),
  },

  linkedIn: {
    display: 'block',
    textAlign: 'center',
  },
})

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const onFieldChange = (e, fieldName, fieldValue, values, errors) => {
  if (fieldName === 'email') {
    if (!validateEmail(fieldValue)) {
      return [
        'Zadejte prosím platnou emailovou adresu ve tvaru např.: jmeno.prijmeni@seznam.cz',
      ]
    }

    return []
  }

  if (fieldName === 'text') {
    if (fieldValue.length === 0) {
      return [
        'Vyplňte prosím pole pro zprávu.',
      ]
    }

    return []
  }

  return errors[fieldName]
}

const validated = (getFieldErrors, initialValues = {}, initialErrors = {}) => (DecoratedComponent) => {
  const ActualComponent = React.createFactory(DecoratedComponent)

  return class extends React.PureComponent {
    state = {
      errors: initialErrors,
      values: initialValues,
    }

    onValidatedFieldChange = (fieldName, fieldValue, e) => {
      this.setState({
        errors: {
          ...this.state.errors,
          [fieldName]: getFieldErrors(e, fieldName, fieldValue, this.state.values, this.state.errors),
        },
        values: {
          ...this.state.values,
          [fieldName]: fieldValue,
        },
      })
    }

    onInputChange = (e) => {
      return this.onValidatedFieldChange(e.target.name, e.target.value, e)
    }

    onCheckboxChange = (e) => {
      return this.onValidatedFieldChange(e.target.name, e.target.checked, e)
    }

    _getErrors() {
      return Object.keys(this.state.values).reduce((errors, fieldName) => {
        const fieldErrors = getFieldErrors({}, fieldName, this.state.values[fieldName], this.state.values, errors)

        return {
          ...errors,
          [fieldName]: fieldErrors,
        }
      }, this.state.errors)
    }

    _validate() {
      const errors = this._getErrors()
      return !Object.keys(errors).some((fieldName) => {
        const fieldErrors = errors[fieldName]
        return fieldErrors && fieldErrors.length > 0
      })
    }

    render() {
      return ActualComponent(
        {
          ...this.props,
          onFieldChange: this.onValidatedFieldChange,
          values: this.state.values,
          errors: this.state.errors,
          formValid: this._validate(),
          isValid: (fieldName) => {
            return !this.state.errors[fieldName] || this.state.errors[fieldName].length === 0
          },
          hasErrors: Object.keys(this.state.errors).some((fieldName) => {
            const fieldErrors = this.state.errors[fieldName]
            return fieldErrors && fieldErrors.length > 0
          }),
          onInputChange: this.onInputChange,
          onCheckboxChange: this.onCheckboxChange,
          onSubmit: (e) => {
            const errors = this._getErrors()
            if (!this._validate()) {
              this.setState({
                errors,
              })
              e.preventDefault()
              return false
            }

            return true
          },
          reset: () => {
            this.setState({
              errors: initialErrors,
              values: initialValues,
            })
          },
        })
    }
  }
}


@validated(onFieldChange, { 'email': '', 'text': '' })
export default class Contact extends React.PureComponent {
  state = {
    loading: false,
    finished: false,
  }

  _handleSubmit = (e) => {
    if (!this.props.onSubmit(e)) {
      return
    }

    e.preventDefault()
    const req = new XMLHttpRequest()
    req.open('POST', 'https://formspree.io/phrich@itdesign.cz', true)
    req.setRequestHeader('Content-type', 'application/json')
    req.onloadstart = () => {
      this.setState({
        loading: true,
      })
    }

    req.onload = () => {
      this.props.reset()
      if (this.form) {
        this.form.reset()
      }

      this.setState({
        loading: false,
        finished: true,
      })

      setTimeout(() => {
        this.setState({
          finished: false,
        })
      }, 1500)
    }


    req.send(JSON.stringify(this.props.values))
  }

  _getSubmitButtonMessage() {
    if (this.state.loading) {
      return 'Odesílám...'
    }

    if (this.state.finished) {
      return 'Odesláno!'
    }

    return 'Odeslat'
  }

  render() {
    return (
      <div className={css(styles.contactContainer)}>
        <h3 className={css(styles.heading)}>Kontakty</h3>
        <h4 className={css(styles.subHeading)}>Jsme připraveni naplánovat, vysvětlit a realizovat řešení
vašich požadavků i zodpovědět vaše dotazy.</h4>
        <form onSubmit={this._handleSubmit} ref={(form) => { this.form = form }} className={css(styles.form)} method='post'>
          <div className={css(styles.formGroup)}>
            <input className={css(styles.input, styles.formControl)} onChange={this.props.onInputChange} name='email' placeholder='Váš email - povinná položka pro odeslání zprávy' type='email' />
            {!this.props.isValid('email') && <p className={css(styles.error)}>{this.props.errors['email']}</p>}
          </div>
          <textarea name='text' className={css(styles.textarea, styles.formControl)} onChange={this.props.onInputChange} />
          {!this.props.isValid('text') && <p className={css(styles.error)}>{this.props.errors['text']}</p>}
          <div className={css(styles.formButtons)}>
            <button className={css(styles.button, this.props.hasErrors ? styles.disabled : '')} >
              {this._getSubmitButtonMessage()}
            </button>
          </div>
          <input type='text' name='_gotcha' style={{ display: 'none' }} />
        </form>
        <div className={css(styles.copyright)}>
          {'Petr Hřích, Živnosteská 1078/22, 312 00 Plzeň-Lobzy;'}<br />
          {'IČ: 87513668; Nejsem plátce DPH;'}<br />
          {'Fyzická osoba zapsaná v živnostenském rejstříku'}
          <a href='https://www.linkedin.com/in/petrhrich/' className={css(styles.linkedIn)}><img src={linkedIn} /></a>
        </div>
      </div>
    )
  }
}
