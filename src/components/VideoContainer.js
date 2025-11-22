import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items || []);
    } catch (err) {
      console.error(err);
      setVideos([]);
    }
  };

  // THIS LOADING CHECK MUST BE FIRST — before any videos[0] access
  if (!videos || videos.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl animate-pulse">Loading videos...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-5 p-4">
      {/* This is now 100% safe */}
      {videos[0] && <AdVideoCard info={videos[0]} />}

      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;