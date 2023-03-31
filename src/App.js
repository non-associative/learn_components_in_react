// import logo from './logo.svg';
// import './App.css';
import React from "react";

{
  /* 函数式组件 (更推荐)*/
}
// function App() {
//   return (
//       <h2>我叫做App组件</h2>
//   );
// }

{
  /* 类组件 （只有类组件才存在 lifecycle methods）*/
  /* 关于生命周期方法的图解： https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/*/
}
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      hiddenBtnComponent: false,
    };
    console.log("类组件App调用contructor方法");
  }

  render() {
    return (
      <div>
        <h2>我是一个App组件</h2>
        <hr />
        {this.state.hiddenBtnComponent ? null : <Btn />}
        <button onClick={(e) => this.displayBtnComponent()}>
          移除Btn类组件
        </button>
      </div>
    );
  }

  displayBtnComponent() {
    this.setState({
      hiddenBtnComponent: true,
    });
  }

  componentDidMount() {
    console.log("类组件App已经完成了mount");
  }

  {/* 由于App中嵌套了Btn，Btn在unmount之前会执行 */}
  componentDidUpdate() {
    console.log("类组件App已经完成了update");
  }
}

class Btn extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <h2>我是一个类组件Btn</h2>;
  }
  componentDidMount() {
    console.log("类组件Btn已经完成了mount");
  }
  componentWillUnmount() {
    console.log("类组件Btn即将被unmount");
  }
}

export default App;
