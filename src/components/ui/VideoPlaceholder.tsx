export default function VideoPlaceholder() {
  return (
    <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center">
      <div className="text-center text-white">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center">
          <svg className="w-10 h-10" fill="white" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <p className="text-lg">Play Welcome Message</p>
      </div>
    </div>
  );
}
