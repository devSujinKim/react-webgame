import React, { memo } from 'react';

// memo: props, state가 바뀔 때마다 렌더링하지 않고 원하는 것만 렌더링해줌
const Try = memo(({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});
export default Try;
