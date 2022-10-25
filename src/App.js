import './App.css';
import Content from './Content';
import { useState, useCallback } from 'react';

// 1. memo() -> higher order component (HOC)
// ghi nhớ lại những props của component để quyết định có reder lại component để tối ưu hiệu năng
// 2. useCallback()
// -reference types
// - react memo

// Hooks
// HOC
// Render props

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {

    setCount(prevCount => prevCount + 1)

  }, [])

  return (
    <div className="App" style={{ padding: 20 }}>
      <Content onIncrease={handleIncrease} />
      <h1>{count}</h1>

    </div>
  );
}

export default App;
