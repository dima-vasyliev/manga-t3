import { prisma } from '@/db/client';
import { trpc } from '@/utils/trpc';
import { Manga } from '@prisma/client';

export default function Home() {
  const { data, isLoading } = trpc.useQuery(['getAllManga']);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data?.map(({ id, name, year, author, rate }) => (
        <>
          <div key={id}>{name}</div>
          <div>year: {year}</div>
          <div>author: {author}</div>
          <div>rate: {rate}</div>
        </>
      ))}
    </div>
  );
}
