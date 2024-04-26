import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store'; // import store từ file store của bạn
import App from './App'; // hoặc import component chính của ứng dụng của bạn

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);