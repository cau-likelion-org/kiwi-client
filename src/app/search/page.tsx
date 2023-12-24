import SearchBodySection from '@/components/search/SearchBodySection';
import SearchHeadSection from '@/components/search/SearchHeadSection';

const SearchPage = () => {
	const searchKeyword = '무엇을 검색할까요?';

	return (
		<>
			<SearchHeadSection />
			<SearchBodySection searchKeyword={searchKeyword} />
		</>
	);
};

export default SearchPage;
