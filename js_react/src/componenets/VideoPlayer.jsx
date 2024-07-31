// src/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/taarakmehtaka... /${video.id.videoId}`;

  return (
    <div>
      <iframe src={videoSrc} allowFullScreen title="Video player" />
      <h4>{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoPlayer;
