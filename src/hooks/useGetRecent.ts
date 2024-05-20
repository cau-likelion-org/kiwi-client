import { getRecentDocs } from '@/apis/docs';
import { useQuery } from '@tanstack/react-query';

export const useGetRecent = () => {
	const { data: recentDocs } = useQuery({
		queryKey: ['getRecentDocs'],
		queryFn: () => getRecentDocs(),
		staleTime: 60 * 1000,
	});
	return recentDocs;
};
