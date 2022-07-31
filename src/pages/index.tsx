import { trpc } from '@/utils/trpc';

export default function Home() {
  const { data, isLoading } = trpc.useQuery(['manga.getAll']);

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
