import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";

const appId = process.env.REACT_APP_MORALIS_APP_ID;
const serverUrlDev = process.env.REACT_APP_MORALIS_SERVER_URL_DEV;

const Application = () => {
  const isServerInfo = appId && serverUrlDev ? true : false;
  if(isServerInfo) 
    return (
      <MoralisProvider appId="appId" serverUrl="serverUrlDev">
        <App isServerInfo />
      </MoralisProvider>
    )
}


ReactDOM.render(
  
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
