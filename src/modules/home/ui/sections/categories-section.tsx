"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

interface IProps{
    categoryId?:string;
}
const CategoriesSection = ({categoryId}:IProps) => {
    const trpc = useTRPC();
    const {data} = useSuspenseQuery(trpc.categories.getMany.queryOptions())
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default CategoriesSection