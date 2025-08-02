"use client";

import { DEFAULT_LIMIT } from "@/constants";
import { useTRPC } from "@/trpc/client";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";


const StudioSection = () => {
    const trpc = useTRPC();
    const {data} = useSuspenseInfiniteQuery(trpc.studio.getMany.infiniteQueryOptions({limit:DEFAULT_LIMIT},{
        getNextPageParam:(lastPage)=> lastPage.nextCursor
    }))
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default StudioSection