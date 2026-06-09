import LoadingSpinner from "@/components/shared/Loading Spinner/LoadingSpinner";

export default function Loading() {
  return (
    <div className="w-full h-screen absolute top-0 left-0 z-30 bg-white flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
