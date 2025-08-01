"use client";

import { DEFAULT_LIMIT } from "@/constants";
import { useTRPC } from "@/trpc/client";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";


const StudioSection = () => {
    const trpc = useTRPC();
    useSuspenseInfiniteQuery(trpc.studio.getMany.infiniteQueryOptions({limit:DEFAULT_LIMIT},{
        getNextPageParam:(lastPage)=> lastPage.nextCursor
    }))
  return (
    <div>StudioSection</div>
  )
}

export default StudioSection