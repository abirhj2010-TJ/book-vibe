const Loading = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mx-auto h-5 w-36 animate-pulse rounded-full bg-emerald-100" />

          <div className="mx-auto mt-4 h-10 w-72 animate-pulse rounded-lg bg-gray-200 sm:w-96" />

          <div className="mx-auto mt-3 h-4 w-80 max-w-full animate-pulse rounded bg-gray-200" />
        </div>

        <div className="mb-6 flex justify-end">
          <div className="h-11 w-48 animate-pulse rounded-xl bg-gray-200" />
        </div>

        <div className="mb-6 h-12 w-full animate-pulse rounded-t-xl bg-gray-200" />

        <div className="space-y-4 rounded-b-xl bg-white p-4 sm:p-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col gap-5 rounded-2xl border border-gray-100 p-4 sm:flex-row sm:p-5"
            >
              <div className="h-56 w-full shrink-0 animate-pulse rounded-xl bg-gray-200 sm:h-52 sm:w-40" />

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="mb-4 flex gap-2">
                    <div className="h-6 w-20 animate-pulse rounded-full bg-emerald-100" />
                    <div className="h-6 w-16 animate-pulse rounded-full bg-yellow-100" />
                  </div>

                  <div className="h-7 w-3/4 animate-pulse rounded bg-gray-200" />

                  <div className="mt-2 h-4 w-40 animate-pulse rounded bg-gray-200" />

                  <div className="mt-5 space-y-2">
                    <div className="h-3 w-full animate-pulse rounded bg-gray-100" />
                    <div className="h-3 w-5/6 animate-pulse rounded bg-gray-100" />
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-t border-gray-100 pt-4">
                  <div className="flex gap-6">
                    <div>
                      <div className="h-3 w-12 animate-pulse rounded bg-gray-100" />
                      <div className="mt-2 h-4 w-10 animate-pulse rounded bg-gray-200" />
                    </div>

                    <div>
                      <div className="h-3 w-16 animate-pulse rounded bg-gray-100" />
                      <div className="mt-2 h-4 w-20 animate-pulse rounded bg-gray-200" />
                    </div>

                    <div>
                      <div className="h-3 w-16 animate-pulse rounded bg-gray-100" />
                      <div className="mt-2 h-4 w-12 animate-pulse rounded bg-gray-200" />
                    </div>
                  </div>

                  <div className="h-10 w-32 animate-pulse rounded-lg bg-emerald-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;