import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from "react"
import { HydrateClient, prefetch, trpc } from "@/trpc/server"
import HomeView from '@/modules/home/ui/view/home-view';

interface IProps{
  searchParams:Promise<{
    categoryId?:string;
  }>
}
const HomePage = async ({searchParams}:IProps) => {
  const {categoryId} = await searchParams;
  prefetch(trpc.categories.getMany.queryOptions());
  return (
    <HydrateClient>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <HomeView categoryId={categoryId}/>
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  )
}

export default HomePage