import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
} from './counter';

const App = () => {
  const count = useSelector(selectCount);
  console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <div>count is {count}</div>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        5 increment
      </button>
    </div>
  );
};

export default App;