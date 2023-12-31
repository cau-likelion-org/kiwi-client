'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const LandingSection1 = () => {
	return (
		<ImageWrapper>
			<Wrapper>
				<Title>
					<StyledImage src="/img/landingTitle.png" alt={'제목'} fill priority></StyledImage>
				</Title>
				<Game>
					<StyledImage src="/img/landingGame.png" alt={'화면'} fill priority></StyledImage>
				</Game>
			</Wrapper>
		</ImageWrapper>
	);
};

export default LandingSection1;

const ImageWrapper = styled.div`
	width: 100%;
	height: fit-content;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	position: relative;
	width: 90%;
	padding-top: 1%;
	gap: 10%;
	padding-bottom: 1%;
`;

const Title = styled.div`
	width: 25%;
`;

const Game = styled.div`
	width: 50%;
	z-index: 3;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;
