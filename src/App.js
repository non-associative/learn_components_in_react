import React, { Component } from "react";

{/* 受控组件 (这里的组件其实是广义组件，包含了标签) */}
{/* 子组件/标签的行为会由父组件控制 */}
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    // value被重新赋值后，将重新渲染input标签从而将
    this.setState({
      // 这里的event.target其实就是 input标签
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("You typed" + this.state.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            name:
            <input type="text" name="name" value={this.state.value} onChange={e => this.handleChange(e)}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

// import React, {useState} from "react";
// export default function App() {
//   const [value, setValue] = useState('');

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(value);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           name:
//           <input type="text" name="name" value={value} onChange={handleChange}></input>
//         </label>
//         <input type="submit" value="Submit"></input>
        
//       </form>
//     </div>
//   );
// }

{/* 非受控组件 (这里的组件其实是广义组件，包含了标签) */}
{/* 子组件/标签的行为不受父标签的约束 */}
// export default class App extends Component {

//   constructor(props) {
//     super(props);
//     this.input = React.createRef();
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     console.log("You typed " + this.input.current.value);
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={e => this.handleSubmit(e)}>
//           <label>
//             name:
//             <input type="text" name="name" ref={this.input}/>
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     )
//   }
// }

