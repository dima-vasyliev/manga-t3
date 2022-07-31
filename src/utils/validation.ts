import { ZodType } from 'zod';

export const parseZodErrors = <Values>(
  schema: ZodType<Values>,
  values: Values
) => {
  const errors = schema.safeParse(values);

  if (errors.success) return {};

  return errors.error.issues.reduce(
    (acc, issue) => ({ ...acc, [issue.path[0]!]: issue.message }),
    {}
  );
};
