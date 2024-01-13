import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import { trpc } from './utils/trpc';

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000',
        }),
      ],
    }),
  );


  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Index />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

const Index = () => {
  const userQuery = trpc.userById.useQuery('1');
  const userCreator = trpc.userCreate.useMutation();

  return (
    <div>
      <p>{userQuery.data?.name}</p>

      <button onClick={() => userCreator.mutate({ name: 'Frodo' })}>
        Create Frodo
      </button>
    </div>
  )
}