import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    //ask TJ about this line
    const destination = (location.state || {}).from || '/'
    console.log({
      location: location,
      history: history,
      destination: destination,
    })
    history.push(destination)
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}
