import { DEFAULT_LIMIT } from "@/constants";
import StudioView from "@/modules/studio/ui/views/StudioView";
import { HydrateClient, prefetch, trpc } from "@/trpc/server"
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const StudioPage = async () => {
  void prefetch(trpc.studio.getMany.infiniteQueryOptions({limit:DEFAULT_LIMIT}));
  return (
    <HydrateClient>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <StudioView/>
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  )
}

export default StudioPage