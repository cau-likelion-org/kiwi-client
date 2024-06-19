'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import * as S from './SearchBodySection.styled';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import SearchResultContainer from '../SearchResult';
import SearchInput from '../searchInput/SearchInput';
import useKeywordParams from '@/hooks/useKeywordParams';

const SearchBodySection = () => {
	const router = useRouter();
	const { searchKeyword } = useKeywordParams();
	const { data: searchResult } = useSearchQuery(searchKeyword);

	useEffect(() => {
		if (searchResult && searchResult.kind === 'searchResult') {
			const encodedTitle = encodeURIComponent(searchKeyword);
			router.push(`viewer?title=${encodedTitle}`);
		}
	}, [searchResult, router, searchKeyword]);

	if (searchResult.kind === 'searchResult') {
		return;
	}

	return (
		<>
			<S.SearchBarWrapper>
				<S.TextImageWrapper>
					<S.StyledImage
						src="/img/search_text.png"
						alt="search_text"
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</S.TextImageWrapper>
				<SearchInput />
			</S.SearchBarWrapper>
			<SearchResultContainer searchResult={searchResult} searchKeyword={searchKeyword} />
		</>
	);
};

export default SearchBodySection;
