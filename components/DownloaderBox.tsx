"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Loader from "./Loader";
import ResultCard from "./ResultCard";

type DownloadResponse = {
  title?: string;
  thumbnail?: string;
  download?: string;
  error?: string;
};

export default function DownloaderBox() {
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
        body: JSON.stringify({ url }),
      });

      const result: DownloadResponse = await res.json();
      setData(result);
    } catch (err) {
      setData({ error: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl text-center">

      {/* Input Box */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass p-3 rounded-2xl flex gap-2"
      >
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste video URL..."
        />

        <Button onClick={handleDownload} disabled={loading}>
          {loading ? "..." : "Download"}
        </Button>
      </motion.div>

      {/* Loader */}
      {loading && <Loader />}

      {/* Result */}
      {data && !data.error && data.title && (
  <ResultCard
    title={data.title}
    thumbnail={data.thumbnail}
    download={data.download}
  />
)}

{data?.error && (
  <p className="text-red-400 mt-4">{data.error}</p>
)}

    </div>
  );
}
