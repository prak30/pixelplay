import React from "react";

const VideoCard = ({ video }) => {
  console.log(video);
  const url = video?.snippet?.thumbnails?.medium?.url;
  const title = video?.snippet?.title;
  const channelTitle = video?.snippet?.channelTitle;
  const viewCount = video?.statistics.viewCount;
  return (
    <div className="p-2 m-2 w-80 shadow-lg">
      <img className="rounded-lg" src={url} alt="thumbnail" />
      <ul>
        <li className="text-bold py-2 ">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
