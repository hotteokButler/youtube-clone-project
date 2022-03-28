import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './app.jsx';
import Youtube from './service/youtube';

const apiKey = process.env.REACT_APP_KEY;
const youtubeApi = new Youtube(apiKey);

document.cookie = 'safeCookie1=foo; SameSite=Lax';
document.cookie = 'safeCookie2=foo';
document.cookie = 'crossCookie=bar; SameSite=None; Secure';
/*
이렇게하면 new Youtube()는 index.js가 호출되는 한번만 만들어져서 
필요한 곳에다가 porps로 전달해주면된다
-> 추후 유닛테스트할때는 이 app컴포넌트를 만들 때 네트워크 통신을 하지 않고 
그냥 이미 정해진 데이터를 리턴하는 클래스를 컴포넌트에 injection(주입)해주면됨

*/
ReactDOM.render(
  <React.StrictMode>
    <App youtubeApi={youtubeApi} />
  </React.StrictMode>,
  document.getElementById('root')
);
