import React, { PureComponent } from 'react';

// PureComponent: props, state가 바뀔 때마다 렌더링하지 않고 원하는 것만 렌더링해줌
class Try extends PureComponent {
  render() {
    const { tryInfo } = this.props;

    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

// class Try extends Component {
//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     );
//   }
// }

export default Try;
