import { useSearchAutoCompleteQuery } from '@/hooks/useSearchAutoCompleteQuery';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface AutoProps {
	searchInput: string;
}

const AutoCompleteContainer = ({ searchInput }: AutoProps) => {
	const router = useRouter();
	const { data: dropdownList, isLoading } = useSearchAutoCompleteQuery(searchInput);

	if (isLoading) {
		return (
			<BoxWrapper>
				<NoResultWrapper>검색중...</NoResultWrapper>
			</BoxWrapper>
		);
	}

	return (
		<BoxWrapper>
			{dropdownList && dropdownList.length > 0 ? (
				dropdownList.map((title, idx) => (
					<ItemWrapper id="complete" key={idx} onClick={() => router.push(`search/?search=${title}`)}>
						{title}
					</ItemWrapper>
				))
			) : (
				<NoResultWrapper>검색결과가 없습니다.</NoResultWrapper>
			)}
		</BoxWrapper>
	);
};

const BoxWrapper = styled.div`
	// position: absolute;
	display: flex;
	flex-direction: column;
	width: 40vw;
	background-color: white;
	margin-left: 2%;
	gap: 10px;
	box-shadow: 2px 2px 2px black;
	z-index: 1;
`;

const ItemWrapper = styled.div`
	padding: 15px;
	font-size: 1.4rem;
	cursor: pointer;
	&:hover {
		background-color: lightgrey;
	}
`;

const NoResultWrapper = styled.div`
	padding: 15px;
	font-size: 1.4rem;
	box-shadow: 2px 2px 2px black;
`;

export default AutoCompleteContainer;
