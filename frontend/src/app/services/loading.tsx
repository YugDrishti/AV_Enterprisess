import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 flex flex-col items-center">
          <Skeleton className="h-12 w-64 md:w-96 mb-4" />
          <Skeleton className="h-1 w-24 bg-color-secondary mb-6" />
          <Skeleton className="h-6 w-full max-w-2xl" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <Skeleton className="w-full lg:w-2/5 h-48 lg:h-auto min-h-[200px] rounded-lg" />
              <div className="w-full lg:w-3/5 space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-20 w-full" />
                <div className="flex gap-2">
                   <Skeleton className="h-6 w-20 rounded-full" />
                   <Skeleton className="h-6 w-20 rounded-full" />
                </div>
                <Skeleton className="h-4 w-32 mt-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
