
import React, { PureComponent } from 'react'
import {EventEmitter} from 'events'

{/* EventEmitter的使用请查看 `events` module 下的 README 文件*/}
const emitter = new EventEmitter();

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <Profile />
      </div>
    )
  }
}

class Home extends PureComponent {
  render() {

    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}

class Profile extends PureComponent {
  componentDidMount() {
    emitter.on('sayHello', this.sayHelloToHome);
  };
  
  componentWillUnmount() {
    emitter.off('sayHello', this.sayHelloToHome);
  }

  sayHelloToHome(message, name)  {
    console.log(message + ', ' + name);
  }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <button onClick={e => emitter.emit('sayHello', 'Hi', 'home')}>向Home打招呼</button>
      </div>
    )
  }
}



