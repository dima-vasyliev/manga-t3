import { prisma } from '@/db/client';
import * as trpc from '@trpc/server';
import { z } from 'zod';

export const mangaRouter = trpc
  .router()
  .query('getAll', {
    async resolve() {
      return await prisma.manga.findMany();
    },
  })
  .mutation('create', {
    input: z.object({
      name: z.string(),
      year: z.string().length(4),
      author: z.string(),
    }),
    async resolve({ input }) {
      return await prisma.manga.create({
        data: input,
      });
    },
  });
