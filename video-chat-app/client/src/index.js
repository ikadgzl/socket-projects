import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SocketContext from './SocketContext';

ReactDOM.render(
  <React.StrictMode>
    <SocketContext>
      <App />
    </SocketContext>
  </React.StrictMode>,
  document.getElementById('root')
);
