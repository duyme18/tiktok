import './App.css';
import Content from './Content';
import { useRef, useReducer } from 'react';

// useReducer
// 1. init state

const initState = {
  job: '',
  jobs: []
}

// 2. action

const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'
const SET_JOB = 'set_job'

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}

// 3. reducer

const reducer = (state, action) => {
  console.log('action', action)
  console.log('prev action', state)

  let newState
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
      case DELETE_JOB:
        const newJobs = [...state.jobs]
        
        newJobs.splice(action.payload, 1)
        newState = {
          ...state,
          jobs: newJobs
        }
        break
    default:
      throw new Error('invalid action type')
  }

  console.log('new action', newState)

  return newState
}

// 4. dispatch

function App() {

  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }

  return (
    <div className="App" style={{ padding: '0 20px' }}>
      <h1>Todo</h1>
      <input
        value={job}
        ref={inputRef}
        placeholder='enter todo...'
        onChange={e => dispatch(setJob(e.target.value))}
      />

      <button onClick={handleSubmit}>add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job} <span onClick={() => dispatch(deleteJob(index))}>&times;</span></li>
        ))}


      </ul>
    </div>
  );
}

export default App;
