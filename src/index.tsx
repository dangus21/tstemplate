
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <Bingo />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
