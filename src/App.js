import React, { Component } from "react";

// 创建Context
const UserContext = React.createContext({
  nickname: "aaaa",
  level: -1,
});

{
  /* 在函数组件中使用API */
}
// function ProfileHeader() {
//   return (
//     <UserContext.Consumer>
//       {
//         value => {
//           return (
//             <div>
//               <h2>用户昵称: {value.nickname}</h2>
//               <h2>用户等级: {value.level}</h2>
//             </div>
//           )
//         }
//       }
//     </UserContext.Consumer>
//   )
// }

{
  /* 在类组件中使用 Context API */
}
class ProfileHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>用户昵称: {this.context.nickname}</h2>
        <h2>用户等级: {this.context.level}</h2>
      </div>
    );
  }
}
// 使用Context： 指明向哪个Context请求数据
ProfileHeader.context = UserContext;

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "kobe",
      level: 99,
    };
  }

  render() {
    return (
      <div>
        {/* 提供Context：当子组件请求数据时，UserContext.Provider组件会把value属性的值给它 */}
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    );
  }
}
