import { useState } from 'react';
import { Button, DatePicker, Space, version } from 'antd';
import 'antd/dist/reset.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrCount = () => {
    setCount(count + 1);
  };

  return <Controls count={count} incr={incrCount} />;
}

const Controls = (props: any) => {
  return (
    <div className="App">
      <Space>
        <DatePicker />
        <span>{props.count}</span>
        <Button type="primary" onClick={props.incr}>
          Primary Button
        </Button>
      </Space>
    </div>
  );
};

export default App;
