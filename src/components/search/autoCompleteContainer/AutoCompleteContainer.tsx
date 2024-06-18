import { useSearchAutoCompleteQuery } from '@/hooks/useSearchAutoCompleteQuery';
import { useRouter } from 'next/navigation';
import * as S from './AutoCompleteContainer.styled';

interface AutoCompleteContainerProps {
	searchInput: string;
}

const AutoCompleteContainer = ({ searchInput }: AutoCompleteContainerProps) => {
	const router = useRouter();
	const { data: dropdownTitleList } = useSearchAutoCompleteQuery(searchInput);

	if (dropdownTitleList.length === 0) {
		return <S.NoResultWrapper>검색 결과가 없습니다.</S.NoResultWrapper>;
	}

	return (
		<>
			{dropdownTitleList.map((title, idx) => (
				<S.ItemWrapper id="complete" key={idx} onClick={() => router.push(`search/?search=${title}`)}>
					{title}
				</S.ItemWrapper>
			))}
		</>
	);
};

export default AutoCompleteContainer;
