import { getSearchResult } from '@/apis/docs';
import { useQuery } from '@tanstack/react-query';

export const useSearchAutoCompleteQuery = (searchInput: string) => {
	const { data, isLoading } = useQuery({
		queryKey: ['autoComplete', searchInput],
		queryFn: () => getSearchResult(searchInput),
		select: (search) => {
			if (search.kind === 'searchResultList') {
				const titleList: string[] = [];
				search.data.forEach((data) => {
					if (data.title.includes(searchInput)) titleList.push(data.title);
				});
				return titleList;
			} else if (search.kind === 'searchResult') {
				return [search.data.title];
			}
		},
	});
	return { data, isLoading };
};
