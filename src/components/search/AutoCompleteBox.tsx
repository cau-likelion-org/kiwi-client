import { useSearchAutoCompleteQuery } from '@/hooks/useSearchAutoCompleteQuery';
import { useRouter } from 'next/navigation';
import { forwardRef, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface AutoProps {
	searchInput: string;
}

const AutoCompleteBox = ({ searchInput }: AutoProps) => {
	const router = useRouter();
	const dropdownList = useSearchAutoCompleteQuery(searchInput);

	return (
		<BoxWrapper>
			{dropdownList ? (
				dropdownList.length > 0 ? (
					dropdownList.map((title, idx) => (
						<ItemWrapper id="complete" key={idx} onClick={() => router.push(`search/?search=${title}`)}>
							{title}
						</ItemWrapper>
					))
				) : (
					<NoResultWrapper>검색결과가 없습니다.</NoResultWrapper>
				)
			) : (
				<NoResultWrapper>검색중...</NoResultWrapper>
			)}
		</BoxWrapper>
	);
};

const BoxWrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	width: 35vw;
	background-color: white;
	margin-left: 2vw;
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

export default AutoCompleteBox;
