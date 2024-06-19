import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface UseDetermineDirectRouterProps {
	kind: 'searchResult' | 'searchResultList';
	searchKeyword: string;
}

const useDetermineDirectRouter = ({ kind, searchKeyword }: UseDetermineDirectRouterProps) => {
	const router = useRouter();

	useEffect(() => {
		if (kind === 'searchResult') {
			const encodedTitle = encodeURIComponent(searchKeyword);
			router.push(`viewer?title=${encodedTitle}`);
		}
	}, [kind, router, searchKeyword]);
};

export default useDetermineDirectRouter;
