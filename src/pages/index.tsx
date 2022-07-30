import type { NextPage } from 'next';
import { Manga } from '@prisma/client';

export default function Home({ mangaList }: { mangaList: string }) {
  return JSON.parse(mangaList).map((manga: Manga) => (
    <div className="font-bold" key={manga.id}>
      {manga.name}
    </div>
  ));
}

export const getServerSideProps = async () => {
  const mangaList = await prisma.manga.findMany();

  return {
    props: {
      mangaList: [],
    },
  };
};
