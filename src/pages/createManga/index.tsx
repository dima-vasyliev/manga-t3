import FormInput from '@/components/FormInput';
import { ERROR_MESSAGES } from '@/constants/validation';
import { InferMutationInput, trpc } from '@/utils/trpc';
import { parseZodErrors } from '@/utils/validation';
import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { z } from 'zod';

type FormValues = InferMutationInput<'manga.create'>;

const fieldSchema = z.string().min(1, ERROR_MESSAGES.REQUIRED);
const validationSchema: z.ZodType<FormValues> = z.object({
  name: fieldSchema,
  year: fieldSchema,
  author: fieldSchema,
});

export default function CreateManga() {
  const router = useRouter();
  const createManga = trpc.useMutation(['manga.create'], {
    onSuccess: () => router.push('/'),
  });

  return (
    <Formik<FormValues>
      onSubmit={(values) => createManga.mutate(values)}
      validate={(values) => parseZodErrors(validationSchema, values)}
      initialValues={{ name: '', year: '', author: '' }}
    >
      <Form>
        <Box mt={10} mx="auto" maxWidth={500} display="grid" gridGap={4}>
          <FormInput label="Назва" name="name" />
          <FormInput label="Рік" name="year" />
          <FormInput label="Автор" name="author" />
          <Button type="submit" isLoading={createManga.isLoading}>
            Зберегти
          </Button>
        </Box>
      </Form>
    </Formik>
  );
}
