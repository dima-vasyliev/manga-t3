import { trpc } from '@/utils/trpc';
import Link from 'next/link';

export default function Home() {
  const { data, isLoading } = trpc.useQuery(['manga.getAll']);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {data?.map(({ id, name, year, author, rate }) => (
        <Link href={`/manga/${id}`} key={id}>
          <div>
            <div>{name}</div>
            <div>year: {year}</div>
            <div>author: {author}</div>
            <div>rate: {rate}</div>
          </div>
        </Link>
      ))}
    </>
  );
}
