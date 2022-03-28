import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './app.jsx';
import Youtube from './service/youtube';

const apiKey = process.env.REACT_APP_KEY;
const youtubeApi = new Youtube(apiKey);

ReactDOM.render(
  <React.StrictMode>
    <App youtubeApi={youtubeApi} />
  </React.StrictMode>,
  document.getElementById('root')
);
