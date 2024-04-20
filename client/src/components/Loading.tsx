import React from 'react';
import { Alert, Flex, Spin, ConfigProvider } from 'antd';

const Loading: React.FC = () => (
  <ConfigProvider
  theme={{
    components: {
      Spin: {
        colorPrimary: "var(--main-color)",
        dotSizeLG: 100,
        fontSize: 40
      },
    },
  }}
>
  <Flex gap="small" vertical>
    <Flex className="load" gap="small" >
      <Spin className="load" tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Flex>
  </Flex>
  </ConfigProvider>
);

export default Loading;