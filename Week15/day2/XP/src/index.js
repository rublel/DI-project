import React from 'react';
import ReactDOM from 'react-dom';
import BuggyCounter from './App';
import ErrorBoundary from './Error';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BuggyCounter/>
      <BuggyCounter/>
    </ErrorBoundary>
    <ErrorBoundary>
      <BuggyCounter/>
    </ErrorBoundary>
    <ErrorBoundary>
      <BuggyCounter/>
    </ErrorBoundary>
      <BuggyCounter/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
