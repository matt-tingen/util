import { QueryClient as TanstackQueryClient } from '@tanstack/query-core';
import type { QueryClient } from './QueryClientCache';

it('has type tests', () => {
  expect(true).toBeTruthy();
});

const tanstackQueryClient = new TanstackQueryClient();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cache: QueryClient<[string], string> = tanstackQueryClient;
