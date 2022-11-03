import React from 'react'
import './index.css'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



// 출처 : https://velog.io/@zerozoo-front/Redux-toolkit%EC%9D%98-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-%EC%82%AC%EC%9A%A9%EB%B2%95-1-