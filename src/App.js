import './App.css';
import Content from './Content';
import { useRef, useReducer } from 'react';

// useReducer
// 1. init state: 0
// 2. up state: +1 / down state: -1 
// 3. reducer
// 4. dispatch

const initState = {
  job: '',
  jobs: []
}

const DELETE_JOB = 'delete_job'
const ADD_JOB = 'add_job'
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

const reducer = (state, action) => {

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
      throw new Error('invalid action action type: ' + action.type)
  }

  return newState
}

function App() {

  const [state, dispatch] = useReducer(reducer, initState);

  const inputRef = useRef()
  const { job, jobs } = state;

  console.log(jobs);
  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }

  return (
    <div className="App" style={{ padding: '0 20px' }}>
      <h1>TODO</h1>
      <input ref={inputRef} placeholder='enter todo...' value={job} onChange={e => dispatch(setJob(e.target.value))} />
      <button onClick={handleSubmit}>add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
