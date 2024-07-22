const LoadingIndicator = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="flex items-center justify-center">
      <svg
        className="animate-pulse h-12 w-12 text-black mr-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <p className="text-black">Loading...</p>
    </div>
  </div>
);

export default LoadingIndicator;
