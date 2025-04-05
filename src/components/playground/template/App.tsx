import { useState } from 'react';
import { Button, Space } from 'antd';
import './App.css';
import { ButtonGroup } from './components/ButtonGroup.tsx';
// import ExampleMDX from './index.mdx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello React Playground</h1>
      <div className="card">
        <Space>
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <Button type="primary">Antd</Button>
        </Space>
        <hr />
        <ButtonGroup />
        {/* <ExampleMDX /> */}
      </div>
    </>
  );
}

export default App;
