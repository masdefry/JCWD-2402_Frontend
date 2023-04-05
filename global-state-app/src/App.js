import {increment, decrement} from './features/counter/counterSlice';
import {addTodo} from './features/todo/todoSlice';
import { useSelector, useDispatch } from 'react-redux';
import {useRef} from 'react';

function App() {
  const count = useSelector((state) => state.bebas.value)
  const todo = useSelector((state) => state.todo.list)
  const dispatch = useDispatch()

  const _input = useRef()

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
      <button onClick={() => dispatch(addTodo('abc'))}>
        Submit Todo
      </button>
    </div>
  );
}

export default App;
