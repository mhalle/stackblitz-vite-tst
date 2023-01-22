import { useState } from 'react';
import { Button, DatePicker, Space, Layout, Tree } from 'antd';
import 'antd/dist/reset.css';
import type { DataNode, TreeProps } from 'antd/es/tree';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;

const treeData: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: <span style={{ color: '#1890ff' }}>sss</span>,
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
];

const MyTree: React.FC = () => {
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <Tree
      checkable
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
    />
  );
};

function App() {
  const [count, setCount] = useState(0);

  const incrCount = () => {
    setCount(count + 1);
  };

  return <Controls count={count} incr={incrCount} />;
}

const Controls = (props: any) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{ backgroundColor: 'white' }}>
        <MyTree />
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Layout style={{ minHeight: '100vh' }}>
          <Content>
            <div className="App">
              <Space style={{ padding: '10px' }}>
                <DatePicker />
                <span>{props.count}</span>
                <Button type="primary" onClick={props.incr}>
                  Primary Button
                </Button>
              </Space>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Footer text. </Footer>
        </Layout>
      </Content>
    </Layout>
  );
};

export default App;
