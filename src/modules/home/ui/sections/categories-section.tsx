"use client";
import { useQueryState } from "nuqs";
import FilterCarousel from "@/components/filter-carousel";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";


const CategoriesSection = () => {
  const trpc = useTRPC();
  const [category, setCategory] = useQueryState("categoryId");
  const { data, isLoading } = useSuspenseQuery(
    trpc.categories.getMany.queryOptions()
  );
  const filterData = data?.map((item) => ({
    label: item?.name,
    value: item?.id,
  }));
  const onSelect = (value: string | null) => {
    if (value) {
      setCategory(value);
    } else {
      setCategory("");
    }
  };
  return (
    <FilterCarousel
      isLoading={isLoading}
      onSelect={onSelect}
      value={category}
      data={filterData}
    />
  );
};

export default CategoriesSection;
