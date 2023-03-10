import React, {useEffect, useState} from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]); // we need a state var to loop on the videos, and trigger reconciliation on every update

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items)
  }

  return <div>VideoContainer</div>
}

export default VideoContainer