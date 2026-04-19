export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center mt-6 gap-3">
      
      {/* Spinner */}
      <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin shadow-lg"></div>

      {/* Text */}
      <p className="text-sm text-gray-300 animate-pulse">
        Fetching video...
      </p>
    </div>
  );
}
