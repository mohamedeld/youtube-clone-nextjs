import { categoriesRouter } from '@/modules/categroies/server/procedures';
import {  createTRPCRouter } from '../init';
import { studioRouter } from '@/modules/studio/server/procedures';
export const appRouter = createTRPCRouter({
  categories:categoriesRouter,
  studio:studioRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;