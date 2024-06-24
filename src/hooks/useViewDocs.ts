import { getDocsContent } from '@/apis/viewer';
import { useQuery } from '@tanstack/react-query';

export const useViewDocs = (docTitle: string) => {
	const { data: viewDocs } = useQuery({
		queryKey: ['getRecentDocs', docTitle],
		queryFn: ({ queryKey }) => getDocsContent(queryKey[1]),
		staleTime: 60 * 1000,
	});
	return viewDocs;
};
