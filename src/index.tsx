import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

import { BrowserRouter } from "react-router-dom";

// setup redux store
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
