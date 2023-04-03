import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export default class App extends Component {
  render() {
    return (
      <div>
        <ClickCounter name="michael"/>
        <HoverCounter name="richard"/>
      </div>
    )
  }
}
