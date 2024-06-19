import { useSearchParams } from 'next/navigation';

const useKeywordParams = () => {
	const params = useSearchParams();

	const searchKeyword = params.get('search') || params.get('title') || '멋쟁이사자처럼';

	return { searchKeyword };
};

export default useKeywordParams;
