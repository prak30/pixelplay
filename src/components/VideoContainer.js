import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/common";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const videos = await response.json();
    setVideo(videos.items);
  };
  return (
    <div className="p-2 m-2 flex flex-wrap">
      {video.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
