import React, { Component } from "react";
import withCounter from "./withCounter";

{/* 注释掉的代码块属于冗余代码，可以使用HOC这种设计模式来减少冗余代码 */}
class ClickCounter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   incrementCount = () => {
//     this.setState((prevState) => {
//       return { count: prevState.count + incrementNumber };
//     });
//   };
  render() {
    const { count, name, incrementCount } = this.props;
    return (
      <button onClick={incrementCount}>
        {name} clicked {count} times
      </button>
    );
  }
}

export default withCounter(ClickCounter, 5);
