import './App.css';
import Content from './Content';
import { useState, memo } from 'react';

// 1. memo() -> higher order component (HOC)
// ghi nhớ lại những props của component để quyết định có reder lại component để tối ưu hiệu năng
// 2. useCallback()

// Hooks
// HOC
// Render props

function App() {
  const [count, setCount] = useState(0)

  const increse = () => {
    setCount(count + 1)
  }
  return (
    <div className="App" style={{ padding: 20 }}>
      <Content />
      <h1>{count}</h1>
      <button onClick={increse}>Click me</button>
    </div>
  );
}

export default App;
