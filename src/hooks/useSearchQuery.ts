import { getSearchResult } from '@/apis/docs';
import { useQuery } from '@tanstack/react-query';

export const useSearchQuery = (searchKeyword: string) => {
	const { data: searchResult } = useQuery({
		queryKey: ['search', searchKeyword],
		queryFn: () => getSearchResult(searchKeyword),
		enabled: !!searchKeyword,
		staleTime: 60 * 1000,
	});
	return searchResult;
};
