export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
        <p className="mt-4 text-lg font-semibold text-primary">Loading...</p>
      </div>
    </div>
  );
}
