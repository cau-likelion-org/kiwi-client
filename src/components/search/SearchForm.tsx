import SearchHeaderForm from './SearchHeaderForm';
import SearchPageForm from './SearchPageForm';

interface SearchFormProps {
	type: string;
	searchKeyword: string;
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
