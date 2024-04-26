import React from 'react';
import { Alert, Flex, Spin, ConfigProvider } from 'antd';
import "../styles/StarCharts.css"

const Loading: React.FC = () => (
  <ConfigProvider
  theme={{
    components: {
      Spin: {
        colorPrimary: "var(--main-color)",
        dotSizeLG: 80,
        fontSize: 40,
        marginXXS: 4
      },
    },
  }}
>
  <Flex gap="small" vertical>
    <Flex className="load" gap="small" >
      <Spin className="load-text" tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Flex>
  </Flex>
  </ConfigProvider>
);

export default Loading;