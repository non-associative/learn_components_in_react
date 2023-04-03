import React, { Component } from "react";
import withCounter from "./withCounter";

{/* 注释掉的代码块属于冗余代码，可以使用HOC这种设计模式来减少冗余代码 */}
class HoverCounter extends Component {
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
      <h2 onMouseEnter={incrementCount}>
        {name} hovered {count} times
      </h2>
    );
  }
}

export default withCounter(HoverCounter, 5);
