import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import InitialPage from './components/InitialPage';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import rootReducer from './RootReducer/rootReducer';
import { createStore } from 'redux';
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <InitialPage />
      </React.StrictMode>
    </BrowserRouter>
   </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
