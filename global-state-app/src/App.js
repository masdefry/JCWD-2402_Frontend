import {increment, decrement} from './features/counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count = useSelector((state) => state.bebas.value)
  const dispatch = useDispatch()
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
    </div>
  );
}

export default App;
