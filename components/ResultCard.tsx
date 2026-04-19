type Props = {
  data: {
    title?: string;
    thumbnail?: string;
    download?: string;
    error?: string;
  };
};

export default function ResultCard({ data }: Props) {
  if (data.error) {
    return (
      <div className="text-red-500 mt-4 text-center">
        {data.error}
      </div>
    );
  }

  return (
    <div className="mt-6 p-6 rounded-2xl bg-white/10 backdrop-blur-xl text-center">
      {/* Thumbnail */}
      {data.thumbnail && (
        <img
          src={data.thumbnail}
          alt="thumbnail"
          className="rounded-xl mb-4 mx-auto"
        />
      )}

      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">
        {data.title}
      </h2>

      {/* Download Button */}
      {data.download && (
        <a
          href={data.download}   // 🔥 IMPORTANT FIX
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl text-white transition"
        >
          Download Now
        </a>
      )}
    </div>
  );
}
