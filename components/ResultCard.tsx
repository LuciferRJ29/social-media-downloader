type ResultProps = {
  title: string;
  thumbnail: string;
  download: string;
};

export default function ResultCard({
  title,
  thumbnail,
  download,
}: ResultProps) {
  return (
    <div className="mt-10 bg-white/10 border border-white/20 backdrop-blur-xl p-5 rounded-2xl">
      
      <img
        src={thumbnail}
        alt="thumbnail"
        className="rounded-xl mb-4 w-full"
      />

      <h2 className="text-lg font-semibold mb-2">
        {title}
      </h2>

      <a
        href={download}
        target="_blank"
        className="inline-block mt-3 px-4 py-2 bg-green-500 rounded-lg hover:scale-105 transition"
      >
        Download Now
      </a>
    </div>
  );
}
