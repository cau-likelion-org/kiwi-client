'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren, useState } from 'react';

export default function ReactQueryProvider({ children }: PropsWithChildren) {
	const [queryClient] = useState(
		() => new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } }),
	);

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<div style={{ fontSize: '25px' }}>
				<ReactQueryDevtools initialIsOpen={false} />
			</div>
		</QueryClientProvider>
	);
}
