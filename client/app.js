import React from 'react'

import {Header} from './components'
import Routes from './routes'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      login: false
    }

    this.loginClickHandler = this.loginClickHandler.bind(this)
  }

  loginClickHandler() {
    const loginStatus = this.state.login
    this.setState({
      login: !loginStatus
    })
  }

  render() {
    return (
      <div>
        <Header
          login={this.state.login}
          loginClickHandler={this.loginClickHandler}
        />
        <Routes />
      </div>
    )
  }
}

export default App
