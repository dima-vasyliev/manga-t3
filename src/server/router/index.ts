import * as trpc from '@trpc/server';
import superjson from 'superjson';
import { mangaRouter } from './manga';

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .merge('manga.', mangaRouter);

export type AppRouter = typeof appRouter;
