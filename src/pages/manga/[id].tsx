import { useRouter } from 'next/router';
import { trpc } from '@/utils/trpc';
import { useToast } from '@chakra-ui/react';

const useManga = (id: string) => {
  const router = useRouter();
  const errorToast = useToast({
    duration: 3000,
    status: 'error',
    description: 'Не вдалось завантажити мангу',
    position: 'bottom-left',
    isClosable: true,
  });

  return trpc.useQuery(['manga.get-by-id', { id: id as string }], {
    onSettled: (data, error) => {
      if (!data || error) {
        errorToast();
        router.push('/');
      }
    },
  });
};

const Manga = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useManga(id as string);

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default Manga;
