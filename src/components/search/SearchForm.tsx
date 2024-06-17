import SearchHeaderForm from './searchHeaderForm/SearchHeaderForm';
import SearchPageForm from './searchPageForm/SearchPageForm';

interface SearchFormProps {
	type: string;
	searchKeyword?: string;
}

const SearchForm = ({ type, searchKeyword }: SearchFormProps) => {
	return (
		<>
			{type === 'search' && <SearchPageForm searchKeyword={searchKeyword} />}
			{type === 'header' && <SearchHeaderForm searchKeyword={searchKeyword} />}
		</>
	);
};

export default SearchForm;
