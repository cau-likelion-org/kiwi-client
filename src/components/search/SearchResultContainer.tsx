import { ISearchResultList } from '@/types/search';
import SearchFound from './searchFound/SearchFound';
import SearchNotFound from './searchNotFound/SearchNotFound';

interface SearchResultProps {
	searchResult: ISearchResultList;
	searchKeyword: string;
}

const SearchResultContainer = ({ searchResult, searchKeyword }: SearchResultProps) => {
	return (
		<>
			{searchResult.data.length > 0 ? (
				<SearchFound searchResult={searchResult.data} />
			) : (
				<SearchNotFound searchKeyword={searchKeyword} />
			)}
		</>
	);
};

export default SearchResultContainer;
