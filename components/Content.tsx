"use client";

import { useState } from "react";

export default function Content() {
  const YouTubePlayer = ({ videoId }: { videoId: string }) => {
    const videoUrl = `https://www.youtube-nocookie.com/embed/${videoId}?version=3&autoplay=0&enablejsapi=1&&loop=1&&playlist=${videoId}`;

    return (
      <div className="w-full h-0 relative" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay *; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  const videoList = ["l-8Ax6JspKk"];

  const randomVideoIndex = Math.floor(Math.random() * videoList.length);
  const currentVideoId = videoList[randomVideoIndex];

  return (
    <>
      <YouTubePlayer videoId={currentVideoId} />
    </>
  );
}
