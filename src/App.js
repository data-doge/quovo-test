import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      handler: undefined
    }
  }

  componentDidMount () {
    const token = ''
    this.init(token, handler => {
      handler.open({ institutionId: 19815 })
    })
  }

  init (token, onLoad) {
    const handler = window.Quovo.create({
      token,
      confirmClose: false,
      singleSync: true,
      search: {
        testInstitutions: process.env.NODE_ENV === 'development'
      },
      onLoad: (_err) => {
        onLoad(handler)
      },
      onOpen: (_err) => {
        handler.status = undefined
      },
      onSync: (_err, event) => {
        handler.status = event.sync.status
      },
      onClose: (_err, event) => {
        console.log(handler.status)
      },
      topInstitutions: 'banks'
    })
  }

  render () {
    return (
      <div />
    )
  }
}

export default App
