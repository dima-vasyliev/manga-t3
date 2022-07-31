import { createReactQueryHooks } from '@trpc/react';
import { inferProcedureInput } from '@trpc/server';
import { AppRouter } from '../server/router';

export const trpc = createReactQueryHooks<AppRouter>();

type Mutations = AppRouter['_def']['mutations'];
type TMutation = keyof Mutations;

export type InferMutationInput<TRouteKey extends TMutation> =
  inferProcedureInput<Mutations[TRouteKey]>;
