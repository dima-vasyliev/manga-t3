import { prisma } from '@/db/client';
import { trpc } from '@/utils/trpc';
import { Manga } from '@prisma/client';

export default function Home() {
  const { data, isLoading } = trpc.useQuery(['hello']);

  if (isLoading) return <div>Loading...</div>;

  return <div>{data?.greeting}</div>;
}
