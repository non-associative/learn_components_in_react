import React, { Component, createRef, useRef } from "react";


{/* 使用Refs来操作DOM */}
{/* refs作用和state差不多，都可用来为组件保存数据，但是ref指向的数据是可变的, 并且值的改变也不会触发re-render */}
export default function Form() {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}


// export default class Form extends Component {
//   constructor(props) {
//     super(props);

//     this.inputRef = createRef();
//   }

//   handleClick = () => {
//     this.inputRef.current.focus();
//   };

//   render() {
//     return (
//       <div>
//         <input ref={this.inputRef} />
//         {/* 不知道为什么下面这一种写法不行，可能是bug吧 */}
//         {/* <button onClick={ e => this.handleClick}>Focus the text</button> */}
//         <button onClick={this.handleClick}>Focus the text</button>
//       </div>
//     );
//   }

//   // handleClick() {
//   //   console.log('hello');
//   //   this.inputRef.current.focus();
//   // }
// }