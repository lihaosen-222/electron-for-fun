import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './samples/node-api'
import 'styles/index.css'
import { ipcRenderer } from "electron";

// 操控控制台
document.onkeydown = (e) => {
  if (e?.key === "F12") {
    ipcRenderer.send('console-switch')
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

postMessage({ payload: 'removeLoading' }, '*')
