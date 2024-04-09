import React from 'react';
import { Alert, Flex, Spin } from 'antd';

const Loading: React.FC = () => (
  <Flex gap="small" vertical>
    <Flex className="load"gap="small" >
      <Spin className="load" tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Flex>
  </Flex>
);

export default Loading;