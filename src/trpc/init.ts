import { initTRPC, TRPCError } from '@trpc/server';
import { cache } from 'react';
import superjson from "superjson"
import { auth } from '../../auth';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
export const createTRPCContext = cache(async () => {
  /**
   * @see: https://trpc.io/docs/server/context
   */
  const session = await auth();

  return { userId: session?.user?.id };
});
export type Context = Awaited<ReturnType<typeof createTRPCContext>>
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.context<Context>().create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  transformer: superjson,
});
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(async function isAuthed(opts){
  const {ctx} = opts;
  if(!ctx.userId){
    throw new TRPCError({
      code:"UNAUTHORIZED",
      message:"Unauthenticated"
    })
  }
  const [user] = await db.select().from(users).where(eq(users?.id,ctx?.userId));
  if(!user){
     throw new TRPCError({
      code:"UNAUTHORIZED",
      message:"Unauthenticated"
    })
  }
  return opts.next({
    ctx:{
      ...ctx,
      user
    }
  })
})