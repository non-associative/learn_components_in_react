import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

{/* 虽然App按类组件还是函数组件的方式进行定义都行，但是优先采用函数组件的定义方式 */}
{/* useful link: https://blog.devgenius.io/how-to-pass-data-from-child-to-parent-in-react-33ed99a90f43 */}
function App() {
  const [count, setCount]  = React.useState(0);
  const changeCount = (change) => {
    setCount(count + change);
  } 

  return (
    <div>
      {/* 父组件App向利用props子组件Counter传递数据 */}
      <Counter text="当前计数:" count={count} />
      {/* 父组件利用回调函数的参数 (此处为change变量) 获得子组件传递的数据 */}
      <Button changeCount={changeCount}/>
    </div>
  );
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }
//   }
//   render() {
//     return   (
//       <div>
//         {/* 父组件App向利用props子组件Counter传递数据 */}
//         <Counter text="当前计数:" count={this.state.count} />
//         {/* <Button changeCount={this.changeCount.bind(this)}/> */}
//         <Button changeCount={(change, e) => this.changeCount(change)}/>
//       </div>
//     );
//   }

//   changeCount(change) {
//     this.setState({
//       count: this.state.count + change
//     });
//   }
// }

{
  /* Counter组件用于展示： 父组件向子组件传递数据 */
}
class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.text} {this.props.count}</h2>
      </div>
    );
  }
}

{
  /* Button组件用于从子组件向父组件 “传递” 数据 */
  /* （ 父子组件之间的数据流向是单向的，也就是只能 parent => children, 但可以另辟蹊径 ） */
}
class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={e => this.props.changeCount(1)}>+1</button>
        <button onClick={e => this.props.changeCount(-1)}>-1</button>
      </div>
    );
  }
}


export default App;
