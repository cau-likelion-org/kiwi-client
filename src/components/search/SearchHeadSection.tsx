'use client';

import Image from 'next/image';
import styled from 'styled-components';

const SearchHeadSection = () => {
	return (
		<SearchHeadWrapper>
			<HeartImageWrapper>
				<Image src="/img/heart.svg" alt="" width={310} height={98} />
			</HeartImageWrapper>
		</SearchHeadWrapper>
	);
};

const SearchHeadWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 50px;
`;

const HeartImageWrapper = styled.div``;

export default SearchHeadSection;
