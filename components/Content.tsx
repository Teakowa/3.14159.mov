"use client";

import { useState } from "react";

export default function Content() {
  const YouTubePlayer = ({ videoId }: { videoId: string }) => {
    const videoUrl = `https://www.youtube-nocookie.com/embed/${videoId}?version=3&autoplay=1&enablejsapi=1&&loop=1&&playlist=${videoId}`;

    return (
      <div className="w-full relative pb-[56.25%]">
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay *; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
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
