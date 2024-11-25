import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer)
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter
      future={{
        v7_startTransition: true, // React.startTransition 기능 활성화
        v7_relativeSplatPath: true, // Splat Routes의 변경된 경로 처리 방식 활성화
      }}
    >
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
