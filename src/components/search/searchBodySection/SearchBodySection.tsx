'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import SearchForm from '../SearchForm';
import * as S from './SearchBodySection.styled';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import SearchResultContainer from '../SearchResult';

const SearchBodySection = () => {
	const router = useRouter();
	const params = useSearchParams();

	const searchKeyword = params.get('search') || '멋쟁이사자처럼';
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
				<SearchForm searchKeyword={searchKeyword} type="search" />
			</S.SearchBarWrapper>
			<SearchResultContainer searchResult={searchResult} searchKeyword={searchKeyword} />
		</>
	);
};

export default SearchBodySection;
