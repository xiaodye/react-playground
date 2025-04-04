import { useState } from 'react';
import { Button, Space } from 'antd';
import './App.css';
import { ButtonGroup } from './components/ButtonGroup.tsx';

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
      </div>
    </>
  );
}

export default App;
