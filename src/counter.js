import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter', // 이름 설정
    initialState: {   // 초기값 지정
        value: 0,
    },
    reducers: {  // reducer들
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload; // 인자를 받을 경우 처리
        },
    },
});

// 액션들을 export
export const { increment, decrement, incrementByAmount } = counterSlice.actions; 

// ???
export default counterSlice.reducer;

// state의 값을 export 한다
export const selectCount = (state) => state.counter.value;