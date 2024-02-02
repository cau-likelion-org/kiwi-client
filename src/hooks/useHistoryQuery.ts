import { getDocHistories } from '@/apis/history';
import { useQuery } from '@tanstack/react-query';

export const useHistoryQuery = (title: string) => {
	const { data, isLoading } = useQuery({
		queryKey: ['historyTitle', title],
		queryFn: () => getDocHistories(title),
		enabled: !!title,
		staleTime: 60 * 1000,
	});
	return { data, isLoading };
};
