// configureStore를 이용해서 스토어를 생성
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';

// configureStore를 이용해서 Reducer를 모아줌
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})