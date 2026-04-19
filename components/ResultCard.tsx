"use client";

type DownloadData = {
  title?: string;
  thumbnail?: string;
  download?: string;
  error?: string;
};

type Props = {
  data: DownloadData;
};

export default function ResultCard({ data }: Props) {
  // ❌ Error state
  if (data.error) {
    return (
      <div className="mt-6 text-center text-red-400 font-medium">
        {data.error}
      </div>
    );
  }

  const handleDownload = () => {
    if (!data.download || data.download.trim() === "") {
      alert("Download link not available");
      return;
    }

    // 🔥 FIX: safe open (avoid popup block issues)
    const link = document.createElement("a");
    link.href = data.download;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-6 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg text-center max-w-md mx-auto">
      
      {/* Thumbnail */}
      {data.thumbnail ? (
        <img
          src={data.thumbnail}
          alt="thumbnail"
          className="rounded-xl mb-4 mx-auto w-full object-cover max-h-64"
        />
      ) : (
        <div className="mb-4 text-gray-400">No preview available</div>
      )}

      {/* Title */}
      {data.title && (
        <h2 className="text-lg font-semibold mb-4 text-white line-clamp-2">
          {data.title}
        </h2>
      )}

      {/* Download Button */}
      <button
        onClick={handleDownload}
        disabled={!data.download}
        className={`inline-block px-6 py-2 rounded-xl text-white font-medium transition duration-200 ${
          data.download
            ? "bg-green-500 hover:bg-green-600"
            : "bg-gray-500 cursor-not-allowed"
        }`}
      >
        ⬇ Download Now
      </button>
    </div>
  );
}
