'use client';

import * as S from './SearchBodySection.styled';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import SearchResultContainer from '../SearchResultContainer';
import SearchInput from '../searchInput/SearchInput';
import useKeywordParams from '@/hooks/useKeywordParams';
import useDetermineDirectRouter from '@/hooks/useDetermineDirectRouter';

const SearchBodySection = () => {
	const { searchKeyword } = useKeywordParams();
	const { data: searchResult } = useSearchQuery(searchKeyword);

	useDetermineDirectRouter({ searchKeyword, kind: searchResult.kind });

	if (searchResult.kind === 'searchResult') {
		return null;
	}

	return (
		<>
			<S.SearchBarWrapper>
				<S.TextImageWrapper>
					<S.StyledImage src="/img/search_text.png" alt="search_text" fill priority />
				</S.TextImageWrapper>
				<SearchInput />
			</S.SearchBarWrapper>
			<SearchResultContainer searchResult={searchResult} searchKeyword={searchKeyword} />
		</>
	);
};

export default SearchBodySection;
