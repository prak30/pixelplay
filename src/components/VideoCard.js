import React from "react";

const VideoCard = ({ video }) => {
  console.log(video);
  const url = video?.snippet?.thumbnails?.medium?.url;
  const title = video?.snippet?.title;
  const channelTitle = video?.snippet?.channelTitle;
  const viewCount = video?.statistics.viewCount;
  return (
    <div className="w-96 mb-2 pb-2">
      <img src={url} alt="thumbnail" />
      <h1 className="text-bold">{title}</h1>
      <h2>{channelTitle}</h2>
      <h3>{viewCount} views</h3>
    </div>
  );
};

export default VideoCard;
