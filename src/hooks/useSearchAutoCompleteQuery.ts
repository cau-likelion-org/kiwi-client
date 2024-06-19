import { getSearchResult } from '@/apis/docs';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

export const useSearchAutoCompleteQuery = (searchKeyword: string) => {
	if (!searchKeyword) {
		throw new Promise(() => {});
	}

	return useSuspenseQuery({
		queryKey: ['search', searchKeyword],
		queryFn: () => getSearchResult(searchKeyword),
		select: (search) => {
			if (search.kind === 'searchResultList') {
				const titleList: string[] = [];
				search.data.forEach((data) => {
					if (data.title.includes(searchKeyword)) titleList.push(data.title);
					else if (data.content.includes(searchKeyword)) titleList.push(data.title);
				});
				return titleList;
			}

			return [search.data.title];
		},
		staleTime: 60 * 1000,
	});
};
