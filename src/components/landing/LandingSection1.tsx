'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const LandingSection1 = () => {
	return (
		<ImageWrapper>
			<Wrapper>
				<Title>
					<StyledImage src="/img/landingTitle.png" alt={'랜딩'} fill priority></StyledImage>
				</Title>
				<Game>
					<StyledImage src="/img/landingGame.png" alt={'랜딩'} fill priority></StyledImage>
				</Game>
			</Wrapper>
		</ImageWrapper>
	);
};

export default LandingSection1;

const ImageWrapper = styled.div`
	width: 100%;
	height: 99vh;
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
	top: 2rem;
	gap: 10rem;
`;

const Title = styled.div`
	width: 30rem;
`;

const Game = styled.div`
	width: 70rem;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: fit-content;
`;
