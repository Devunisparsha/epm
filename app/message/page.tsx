"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Youtube, PlayCircle, Clock, ChevronRight } from "lucide-react";

interface Video {
  id: number;
  title: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl?: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "Devuni Sparsha",
    description: "Experience the transformative power of God's touch through our weekly messages.",
    youtubeUrl: "https://www.youtube.com/channel/UCtBqdgXf6fmgAVYT1X-_aDA",
    thumbnailUrl: "/message/banner.jpg",
  },
];

const MessagePage: React.FC = () => {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary mb-6">
            Spiritual <span className="text-secondary">Messages</span>
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Watch our latest sermons, worship sessions, and teaching series on our official YouTube channel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-premium border border-gray-100 hover:border-primary/20 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                {video.thumbnailUrl && (
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <PlayCircle size={64} className="text-white animate-pulse" />
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                  <Youtube size={14} />
                  YOUTUBE
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">
                  <Clock size={16} />
                  <span>Latest Update</span>
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {video.title}
                </h2>
                <p className="text-gray-500 font-light leading-relaxed mb-8 flex-grow">
                  {video.description}
                </p>
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-black group-hover:gap-4 transition-all"
                >
                  Watch Now <ChevronRight size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-primary rounded-[3rem] text-center relative overflow-hidden shadow-premium"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6 relative z-10">
            Never Miss a Message
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-light mb-10 max-w-xl mx-auto relative z-10">
            Subscribe to our YouTube channel to get notified whenever we go live or post new content.
          </p>
          <a
            href="https://www.youtube.com/channel/UCtBqdgXf6fmgAVYT1X-_aDA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-white text-primary rounded-2xl font-black text-lg hover:bg-secondary hover:text-white transition-all shadow-xl relative z-10"
          >
            Subscribe on YouTube
          </a>
        </motion.div>
      </div>
    </main>
  );
};

export default MessagePage;
