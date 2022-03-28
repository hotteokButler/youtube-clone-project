class Youtube {
  constructor(client) {
    this.youtubeClient = client;
  }

  async mostPopular() {
    const response = await this.youtubeClient.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: '24',
        regionCode: 'KR',
      },
    });

    //라이브러리 안에서 자동으로 json 변환

    return await response.data.items;
  }

  async search(query) {
    const response = await this.youtubeClient.get('search', {
      part: 'snippet',
      type: 'video',
      maxResults: '24',
      q: query,
    });

    return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));
  }

  async comments(videoId) {
    const response = await this.youtubeClient.get('commentThreads', {
      part: 'snippet',
      videoId: videoId,
      maxResults: '20',
    });

    return response.data.item;
  }
}

export default Youtube;

/*
    fetch를통해 api를 불러올대는 requestOption을 설정해주게되는데 상세 옵션은
    https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch 
    예제..참고!!!! 
    */
