// MessagePage.tsx
import React, { useState, useEffect } from "react";

interface Video {
  id: number;
  title: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl?: string; // optional thumbnail URL
}

interface VideoCardProps {
  video: Video;
}
interface MessagePageProps {}

const videos: Video[] = [
  // Replace with your actual video data
  {
    id: 1,
    title: "Devuni Sparsha",
    description: "",
    youtubeUrl: "https://www.youtube.com/channel/UCtBqdgXf6fmgAVYT1X-_aDA",
  },
  // ... more videos
];

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="mb-8 bg-white rounded shadow-md p-4 flex flex-col">
      {video.thumbnailUrl && (
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-48 object-cover rounded-t-md mb-4"
        />
      )}
      <h2 className="text-xl font-bold mb-2">{video.title}</h2>
      <p className="text-gray-700 mb-4">{video.description}</p>
      <a
        href={video.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Watch on YouTube
      </a>
    </div>
  );
};

const MessagePage: React.FC<MessagePageProps> = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Latest Messages</h1>
      {/* Display Videos */}
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default MessagePage;
