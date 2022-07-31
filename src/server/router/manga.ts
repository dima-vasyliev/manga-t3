import { prisma } from '@/db/client';
import * as trpc from '@trpc/server';

export const mangaRouter = trpc.router().query('getAll', {
  async resolve() {
    return await prisma.manga.findMany();
  },
});
