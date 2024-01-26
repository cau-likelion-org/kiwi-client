import { ISearchResult, ISearchResultList } from '@/types/search';
import React from 'react';
import Loading from '../common/Loading';
import SearchFound from './SearchFound';
import SearchNotFound from './SearchNotFound';

interface SearchResultProps {
	searchResult: ISearchResult | ISearchResultList | undefined;
	searchKeyword: string;
}

const SearchResult = ({ searchResult, searchKeyword }: SearchResultProps) => {
	if (!searchResult) return <Loading />;

	return (
		<>
			{searchResult.kind === 'searchResultList' && searchResult.data.length > 0 ? (
				<SearchFound searchResult={searchResult.data} />
			) : (
				searchResult.kind !== 'searchResult' && <SearchNotFound searchKeyword={searchKeyword} />
			)}
		</>
	);
};

export default SearchResult;
