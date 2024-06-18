import { ISearchResult, ISearchResultList } from '@/types/search';
import React from 'react';
import Loading from '../common/Loading';
import SearchFound from './searchFound/SearchFound';
import SearchNotFound from './searchNotFound/SearchNotFound';

interface SearchResultProps {
	searchResult: ISearchResult | ISearchResultList | undefined;
	searchKeyword: string;
	isPending: boolean;
}

const SearchResultContainer = ({ searchResult, searchKeyword, isPending }: SearchResultProps) => {
	if (isPending) {
		return <Loading />;
	}

	if (!searchResult) {
		return <SearchNotFound searchKeyword={searchKeyword} />;
	}

	return <>{searchResult.kind === 'searchResultList' && <SearchFound searchResult={searchResult.data} />}</>;
};

export default SearchResultContainer;
