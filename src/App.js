import './App.css';
import { useReducer, useState } from 'react';

// useState
// 1. init state: 0
// 2. up state: +1 / down state: -1 


// useReducer
// 1. init state: 0
// 2. up state: +1 / down state: -1 
// 3. reducer
// 4. dispatch

const initState = 0

const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

const reducer = (state, action) => {
  console.log("reducer");
  switch (action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error(`Invalid action ${action}`)
  }
}

function App() {

  // const [count, setCount] = useState(0)

  const [count, dispatch] = useReducer(reducer, initState)

  // const handleDown = () => {
  //   setCount(prevCount => prevCount - 1)
  // }

  // const handleUp = () => {
  //   setCount(prevCount => prevCount + 1)
  // }


  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
}

export default App;
