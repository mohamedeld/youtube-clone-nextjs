"use client";

import FilterCarousel from "@/components/filter-carousel";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

interface IProps{
    categoryId?:string;
}
const CategoriesSection = ({categoryId}:IProps) => {
    const trpc = useTRPC();
    const {data,isLoading} = useSuspenseQuery(trpc.categories.getMany.queryOptions())
    const filterData = data?.map(item=>({
      label:item?.name,
      value:item?.id
    }))
  return (
    <FilterCarousel isLoading={isLoading} onSelect={(x)=> console.log(x)}value={categoryId} data={filterData}/>
  )
}

export default CategoriesSection