import type { MemoizeCache } from '../memoize';

export interface QueryClient<Args extends unknown[], Return> {
  getQueryState: (
    args: Args,
  ) => { status: 'success' | (string & {}) } | undefined;
  getQueryData: (args: Args) => Return | undefined;
  setQueryData: (args: Args, value: Return) => void;
}

export class QueryClientCache<Args extends unknown[], Return>
  implements MemoizeCache<Args, Return>
{
  private client: QueryClient<Args, Return>;

  constructor(client: QueryClient<Args, Return>) {
    this.client = client;
  }

  has(args: Args): boolean {
    return this.client.getQueryState(args)?.status === 'success';
  }

  get(args: Args): Return {
    return this.client.getQueryData(args) as Return;
  }

  set(args: Args, value: Return): void {
    this.client.setQueryData(args, value);
  }
}
