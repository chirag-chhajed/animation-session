const Spinner = ({ className = "" }: { className?: string }) => (
  <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none">
    <circle
      cx="20"
      cy="20"
      r="16"
      stroke="#888"
      strokeWidth="4"
      strokeDasharray="80"
      strokeDashoffset="60"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export function Loader() {
  return (
    <div className="flex gap-8 items-center justify-center min-h-[120px]  rounded-xl p-8">
      <div className="flex flex-col items-center">
        <Spinner className="animate-spin-fast" />
        <div className="text-xs text-gray-500 mt-2">Fast</div>
      </div>
      <div className="flex flex-col items-center">
        <Spinner className="animate-spin-slow" />
        <div className="text-xs text-gray-500 mt-2">Slow</div>
      </div>
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          .animate-spin-fast {
            animation: spin 0.8s linear infinite;
          }
          .animate-spin-slow {
            animation: spin 2.4s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Loader;
