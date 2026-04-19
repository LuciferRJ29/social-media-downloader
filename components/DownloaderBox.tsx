"use client";

import { useState } from "react";
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
        headers: {
          "Content-Type": "application/json",
        },
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
      <div className="flex gap-2 bg-white/10 p-3 rounded-xl backdrop-blur-lg">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste video URL..."
        />

        <Button onClick={handleDownload} disabled={loading}>
          {loading ? "..." : "Download"}
        </Button>
      </div>

      {/* Loader */}
      {loading && <Loader />}

      {/* ✅ FIXED RESULT RENDER */}
      {data && !data.error && (
        <ResultCard data={data} />
      )}

      {/* Error */}
      {data?.error && (
        <p className="text-red-400 mt-4">{data.error}</p>
      )}
    </div>
  );
}
