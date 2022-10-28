import { useState } from 'react'
import { useStore, actions, useRef } from './store'

function App() {

  const [state, dispatch] = useStore()
  const [isUpdate, setIsUpdate] = useState(false);

  const refInput = useRef()

  const { todo, todos, todoUpdate, indexUpdate } = state

  const handleAdd = () => {
    dispatch(actions.addTodo(todo))
    dispatch(actions.setTodo(''))
    refInput.current.focus()
  }
  const handleUpdate = (name, index, isUpdate) => {
    if (!isUpdate) {
      setIsUpdate(true)
      dispatch(actions.updateNameTodo({ name: name, index: index }))
    }
    else {
      dispatch(actions.updateTodo({ name: todoUpdate, index: index }))
      dispatch(actions.setTodo(''))
      setIsUpdate(false);
    }
    // isUpdate = true
  }


  console.log(30, todos)
  console.log(33, todo, todos, todoUpdate)

  return (
    <div className="App">
      <h1>Todo</h1>
      <input
        value={todo}
        ref={refInput}
        placeholder="enter todo..."
        onChange={e => {
          dispatch(actions.setTodo(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos && todos.length ? todos.map((todo, index) => (
          <li
            key={index}
          >
            {isUpdate && indexUpdate === index ?
              <input onChange={e => {
                dispatch(actions.updateNameTodo({ name: e.target.value, index: index }))
              }} value={todoUpdate}
              /> : todo}
            <button onClick={() => handleUpdate(todo, index, isUpdate)}>Update</button>
            <button onClick={() => dispatch(actions.deleteTodo(index))}>Delete</button>
          </li>
        )) : null}
      </ul>
    </div>
  );
}

export default App;
