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

  return (
    <div className="mt-6 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg text-center max-w-md mx-auto">
      
      {/* Thumbnail */}
      {data.thumbnail ? (
        <img
          src={data.thumbnail}
          alt="thumbnail"
          className="rounded-xl mb-4 mx-auto w-full object-cover"
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
      {data.download && (
        <a
          href={data.download}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 px-6 py-2 rounded-xl text-white font-medium transition duration-200"
        >
          ⬇ Download Now
        </a>
      )}
    </div>
  );
}
