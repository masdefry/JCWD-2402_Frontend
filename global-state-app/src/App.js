import {increment, decrement} from './features/counter/counterSlice';
import {addTodo, deleteTodo, getTodoAsync} from './features/todo/todoSlice';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect, useRef} from 'react';

function App() {
  const count = useSelector((state) => state.bebas.value)
  const todo = useSelector((state) => state.todo.list)
  const dispatch = useDispatch()

  const _input = useRef()

  useEffect(() => {
    dispatch(getTodoAsync())
  }, [])

  return (
    <div style={{marginLeft: '300px'}}>
      <button onClick={() => dispatch(decrement())}>
       -
      </button>
      <h1>
        {count}
      </h1>
      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <h1>
        Todo List 
      </h1>
      <input ref={_input} type='text' />
      <button onClick={() => dispatch(addTodo(_input.current.value))}>
        Submit Todo
      </button>
      {console.log(todo)}
      {
        todo.map((value, index) => {
          return(
            <div>
              {value.todo} <span onClick={() => dispatch(deleteTodo({index, value}))} style={{color: 'blue'}}>Delete</span>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
