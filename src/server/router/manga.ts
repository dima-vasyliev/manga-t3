import { prisma } from '@/db/client';
import * as trpc from '@trpc/server';
import { z } from 'zod';

export const mangaRouter = trpc
  .router()
  .query('getAll', {
    resolve: async () => await prisma.manga.findMany(),
  })
  .query('get-by-id', {
    input: z.object({
      id: z.string(),
    }),
    resolve: async ({ input }) =>
      await prisma.manga.findFirst({
        where: {
          id: input.id,
        },
      }),
  })
  .mutation('create', {
    input: z.object({
      name: z.string(),
      year: z.string().length(4),
      author: z.string(),
    }),
    resolve: async ({ input }) =>
      await prisma.manga.create({
        data: input,
      }),
  });
