import { getSearchResult } from '@/apis/docs';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useSearchQuery = (searchKeyword: string) => {
	if (!searchKeyword) {
		throw new Promise(() => {});
	}

	return useSuspenseQuery({
		queryKey: ['search', searchKeyword],
		queryFn: () => getSearchResult(searchKeyword),
		staleTime: 60 * 1000,
	});
};
