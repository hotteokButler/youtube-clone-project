import React, { useEffect, useState } from 'react';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';

/*
- 패턴은 MVC, MVVM(안드로이드앱), MVI ,MVP 등 많이 있지만 궁극적 목적은 어플리케이션에서 조금 더 역할에 맞게
세부적으로 레이어를 나누어서 한가지의 것이 한가지의 responsibility를 가질 수 있도록 세분화해서 구조적으로 나눔으로써
테스트도 쉽게 할 수 있고 유지보수도 쉬어지게됨
- React는 MVC패턴(Model View Controler)의 View 레이어를 담당 : view에 대한 일만 해야함 ( 멍청하게 만들어야함!)
  -> 컴포넌트안에 네트워크통신이라던가, 키같은 credential이 직접적으로 들어있으면 안됨,
  -> 따로 클래스로 만들어서 주입 즉, App에서 필요한 dependency를 Injection(주입) 해줘야한다 => Dependenct Injection
    이렇게 mock(더미) 클래스를 전달해주면 유닛테스트도 빨라진다
*/

function App({ youtubeApi }) {
  const [videos, setViedos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    youtubeApi
      .search(query) //
      .then((result) => setViedos(result)) //
      .catch((error) => console.log('error', error));
  };
  /*
  useEffect(콜백,옵션) : 컴포넌트가 마운트될때마다, 업데이트될때마다 설정해둔 콜백함수가 실행됨
    -> 원하는 변수의 목록을 옵션에 적용하면 해당 목록이 업데이트될때만 실행됨!
  */
  useEffect(() => {
    youtubeApi
      .mostPopular() //
      .then((result) => setViedos(result.items)) //
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <Header onSearch={search} />
      <div className={styles.content}>
        {selectedVideo && (
          <section className={styles.videoDetail}>
            <VideoDetail video={selectedVideo} />
          </section>
        )}
        <section className={styles.mainVideoList}>
          <VideoList
            videos={videos && videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </section>
      </div>
    </>
  );
}

export default App;
