'use client';

import Image from 'next/image';
import styled from 'styled-components';

const SearchHeadSection = () => {
	return (
		<SearchHeadWrapper>
			<HeartImageWrapper>
				<StyledImage src="/img/heart.svg" alt="heart_image" fill priority />
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

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

const HeartImageWrapper = styled.div`
	position: relative;
	width: 310px;
	height: 98px;
`;

export default SearchHeadSection;
