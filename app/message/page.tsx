// MessagePage.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import the Image component

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
    thumbnailUrl: "/images/default-thumbnail.jpg", // Added a placeholder thumbnail
  },
  // ... more videos
];

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="mb-8 bg-white rounded shadow-md p-4 flex flex-col">
      {video.thumbnailUrl && (
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-48 object-cover rounded-t-md mb-4"
          width={1920}
          height={1080}
          objectFit="cover"
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
      <h1 className="text-2xl text-center bg-fourth py-4 rounded-full mb-8">
        Latest Messages
      </h1>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default MessagePage;
