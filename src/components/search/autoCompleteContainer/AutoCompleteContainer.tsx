import { useSearchAutoCompleteQuery } from '@/hooks/useSearchAutoCompleteQuery';
import { useRouter } from 'next/navigation';
import * as S from './AutoCompleteContainer.styled';

interface AutoProps {
	searchInput: string;
}

const AutoCompleteContainer = ({ searchInput }: AutoProps) => {
	const router = useRouter();
	const { data: dropdownList, isLoading } = useSearchAutoCompleteQuery(searchInput);

	if (isLoading) {
		return (
			<S.BoxWrapper>
				<S.NoResultWrapper>검색중...</S.NoResultWrapper>
			</S.BoxWrapper>
		);
	}

	return (
		<S.BoxWrapper>
			{dropdownList && dropdownList.length > 0 ? (
				dropdownList.map((title, idx) => (
					<S.ItemWrapper id="complete" key={idx} onClick={() => router.push(`search/?search=${title}`)}>
						{title}
					</S.ItemWrapper>
				))
			) : (
				<S.NoResultWrapper>검색결과가 없습니다.</S.NoResultWrapper>
			)}
		</S.BoxWrapper>
	);
};

export default AutoCompleteContainer;
