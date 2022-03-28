class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&regionCode=KR&key=${this.key}`,
      this.getRequestOptions
    );
    return await response.json();
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=24&q=${query}&key=${this.key}`,
      this.getRequestOptions
    );
    const getJson = await response.json();
    return getJson.items.map((item) => ({ ...item, id: item.id.videoId }));
  }

  async comments(videoId) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=20&key=${this.key}`,
      this.getRequestOptions
    );
    return await response.json();
  }
}

export default Youtube;

/*
    fetch를통해 api를 불러올대는 requestOption을 설정해주게되는데 상세 옵션은
    https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch 
    예제..참고!!!! 
    */
