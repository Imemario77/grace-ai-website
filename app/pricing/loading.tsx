import { Skeleton } from "@/components/ui/skeleton"

export default function PricingLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Skeleton className="h-12 w-[500px] mx-auto" />
                <Skeleton className="h-8 w-[400px] mx-auto mt-4" />
                <Skeleton className="h-6 w-[300px] mx-auto" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <Skeleton className="h-24 w-full md:col-span-4" />

              {[...Array(4)].map((_, i) => (
                <div key={i} className="border rounded-lg p-6">
                  <Skeleton className="h-8 w-full mb-4" />
                  <Skeleton className="h-10 w-32 mb-6" />
                  <div className="space-y-3">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="flex items-center">
                        <Skeleton className="h-5 w-5 mr-3" />
                        <Skeleton className="h-5 flex-1" />
                      </div>
                    ))}
                  </div>
                  <Skeleton className="h-10 w-full mt-6" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
