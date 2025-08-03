"use client";

import InfiniteScroll from "@/components/infinite-scroll";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DEFAULT_LIMIT } from "@/constants";
import { useTRPC } from "@/trpc/client";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const StudioSection = () => {
  const trpc = useTRPC();
  const router = useRouter();
  const { data,isFetchingNextPage, hasNextPage,fetchNextPage } = useSuspenseInfiniteQuery(
    trpc.studio.getMany.infiniteQueryOptions(
      { limit: DEFAULT_LIMIT },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    )
  );

  const handleRedirect =  (id:string)=>{
    router.push(`/studio/videos/${id}`);
  }

  return <div>
    <div className="border-y">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-6 w-[510px]">Video</TableHead>
            <TableHead>Visibility</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Views</TableHead>
            <TableHead className="text-right">Comments</TableHead>
            <TableHead className="text-right pr-6">Likes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.pages?.flatMap((page)=> page?.items)?.map((item)=>(
              <TableRow className="cursor-pointer" key={item?.id}  onClick={()=> handleRedirect(item?.id)}>
                <TableCell>
                  {item?.title}
                </TableCell>
                <TableCell>
                  Visibility
                </TableCell>
                <TableCell>
                  Visibility
                </TableCell>
                <TableCell>
                  Visibility
                </TableCell>
                <TableCell>
                  Visibility
                </TableCell>
                <TableCell>
                  Visibility
                </TableCell>
                <TableCell>
                  Visibility
                </TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
      <InfiniteScroll
      isManual={true}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </div>;
};

export default StudioSection;
