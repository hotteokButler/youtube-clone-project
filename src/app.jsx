import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';

function App(props) {
  const [videos, setViedos] = useState([]);

  /*
  useEffect(콜백,옵션) : 컴포넌트가 마운트될때마다, 업데이트될때마다 설정해둔 콜백함수가 실행됨
    -> 원하는 변수의 목록을 옵션에 적용하면 해당 목록이 업데이트될때만 실행됨!
  */
  useEffect(() => {
    /*
    fetch를통해 api를 불러올대는 requestOption을 설정해주게되는데 상세 옵션은
    https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch 
    예제..참고!!!! 
    */
    fetch('http://localhost:3000/json/mostPopular.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((result) => {
        console.log(result.items);
        return setViedos(result.items);
      })
      .catch((error) => console.log('error', error));
  }, []);

  return <VideoList videos={videos} />;
}

export default App;
