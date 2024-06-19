import { useSearchAutoCompleteQuery } from '@/hooks/useSearchAutoCompleteQuery';
import { useRouter } from 'next/navigation';
import * as S from './AutoCompleteContainer.styled';
import { RefObject } from 'react';

interface AutoCompleteContainerProps {
	searchInput: string;
	autoCompleteRef: RefObject<HTMLDivElement>;
}

const AutoCompleteContainer = ({ searchInput, autoCompleteRef }: AutoCompleteContainerProps) => {
	const router = useRouter();
	const { data: autoCompleteList } = useSearchAutoCompleteQuery(searchInput);

	return (
		<S.AutoCompleteWrapper ref={autoCompleteRef}>
			{autoCompleteList.length > 0 ? (
				autoCompleteList.map((title, idx) => (
					<S.OptionWrapper key={idx} onClick={() => router.push(`search/?search=${title}`)}>
						{title}
					</S.OptionWrapper>
				))
			) : (
				<S.NoResultWrapper>검색 결과가 없습니다.</S.NoResultWrapper>
			)}
		</S.AutoCompleteWrapper>
	);
};

export default AutoCompleteContainer;
