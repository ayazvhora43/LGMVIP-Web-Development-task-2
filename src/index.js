import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import ReactDOM from 'react-dom';
import App from './App';
import Loader from 'react-loader-spinner';

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
    return (
      promiseInProgress && 
      <div
        style={{
        width: "100%",
        height: "100",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "200px 20px 0 0"
        }}
      >
            <Loader type="ThreeDots" color="#28cc9e" height="120" width="120" />
            </div>
    );  
  }

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoadingIndicator/>
  </React.StrictMode>,
  document.getElementById('root')
);