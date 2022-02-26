import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//step 7 - <ContextProvide /> as Content can access login status: user, isFetching, error, dispatch
//makes that data available to all components in the App
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

