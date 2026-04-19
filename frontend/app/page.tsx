"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type DownloadResponse = {
  title: string;
  thumbnail: string;
  download: string;
  error?: string;
};

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState<DownloadResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!url.trim()) return;

    setLoading(true);
    setData(null);

    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const result: DownloadResponse = await res.json();
      setData(result);
    } catch (error) {
      console.error(error);
      setData({ error: "Something went wrong" } as any);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex items-center justify-center min-h-screen px-4">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-30 blur-[120px] rounded-full" />

      <div className="w-full max-w-2xl text-center z-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          ⚡ Social Media Downloader
        </motion.h1>

        <p className="text-gray-400 mb-8">
          Download videos instantly from YouTube, Instagram & TikTok
        </p>

        {/* Input Box */}
        <div className="flex gap-2 bg-white/10 border border-white/20 backdrop-blur-xl p-3 rounded-2xl">
          <input
            type="text"
            placeholder="Paste video URL..."
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button
            onClick={handleDownload}
            disabled={loading}
            className="px-5 py-2 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition disabled:opacity-50"
          >
            {loading ? "Loading..." : "Download"}
          </button>
        </div>

        {/* Result */}
        {data && !data.error && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 bg-white/10 border border-white/20 backdrop-blur-xl p-5 rounded-2xl"
          >
            <img
              src={data.thumbnail}
              alt="thumbnail"
              className="rounded-xl mb-4 w-full"
            />

            <h2 className="text-lg font-semibold mb-2">
              {data.title}
            </h2>

            <a
              href={data.download}
              target="_blank"
              className="inline-block mt-3 px-4 py-2 bg-green-500 rounded-lg hover:scale-105 transition"
            >
              Download Now
            </a>
          </motion.div>
        )}

        {/* Error */}
        {data?.error && (
          <p className="mt-6 text-red-400">{data.error}</p>
        )}

      </div>
    </main>
  );
}
