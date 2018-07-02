import React from 'react'

export default class App extends React.Component {
  log() {
    console.log('Hello')
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={this.log}>Hello</button>
      </div>
    )
  }
}