"use client";

import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Loader from "./Loader";
import ResultCard from "./ResultCard";

type DownloadResponse = {
  title: string;
  thumbnail: string;
  download: string;
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
      console.error(err);
      setData({ error: "Something went wrong" } as any);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl text-center">

      {/* Input box */}
      <div className="flex gap-2 bg-white/10 border border-white/20 backdrop-blur-xl p-3 rounded-2xl">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste video URL..."
        />

        <Button onClick={handleDownload} disabled={loading}>
          {loading ? "Loading..." : "Download"}
        </Button>
      </div>

      {/* Loader */}
      {loading && <Loader />}

      {/* Result */}
      {data && !data.error && (
        <ResultCard
          title={data.title}
          thumbnail={data.thumbnail}
          download={data.download}
        />
      )}

      {/* Error */}
      {data?.error && (
        <p className="mt-6 text-red-400">{data.error}</p>
      )}

    </div>
  );
}
