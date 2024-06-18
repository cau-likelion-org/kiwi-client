import { getSearchResult } from '@/apis/docs';
import { useQuery } from '@tanstack/react-query';

export const useSearchAutoCompleteQuery = (searchKeyword: string) => {
	const { data, isLoading } = useQuery({
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
			} else if (search.kind === 'searchResult') {
				return [search.data.title];
			}
		},
		staleTime: 60 * 1000,
	});
	return { data, isLoading };
};
