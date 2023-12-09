'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const LandingSection3 = () => {
	return (
		<>
			<ImageWrapper>
				<Wrapper>
					<Title>
						<div className="overlay">{'> WIKI GUIDE <'}</div>
						<StyledImage src="/img/wikiGuide.png" alt={'랜딩'} fill priority></StyledImage>
					</Title>
					<Box>
						<StyledImage src="/img/guideSection.png" alt={'랜딩'} fill priority></StyledImage>
					</Box>
				</Wrapper>
			</ImageWrapper>
			<LionWrapper>
				<Lion1>
					<StyledImage2 src="/img/heartlion.png" alt={'랜딩'} fill priority></StyledImage2>
				</Lion1>
				<Lion2>
					<StyledImage2 src="/img/glasslion.png" alt={'랜딩'} fill priority></StyledImage2>
				</Lion2>
			</LionWrapper>
		</>
	);
};

export default LandingSection3;

const ImageWrapper = styled.div`
	width: 100%;
	height: 98vh;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;
	gap: 1rem;
`;

const Title = styled.div`
	position: relative;
	width: 45%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: max-content;
	margin-left: 3rem;
	z-index: 1;
	.overlay {
		z-index: 2;
		position: absolute;
		height: 100%;
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
		font-size: 200%;
		font-family: NeoDunggeunmo Pro;
		font-style: normal;
		font-weight: bold;
		line-height: normal;
		letter-spacing: 0.3125rem;
	}
`;

const Box = styled.div`
	position: relative;
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: max-content;
	margin-left: 3rem;
	gap: 1rem;
	z-index: 1;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: fit-content;
`;

const LionWrapper = styled.div`
	position: relative;
	width: 100%;
`;

const Lion1 = styled.div`
	position: absolute;
	width: 15rem;
	bottom: 0;
	left: 3rem;
`;

const Lion2 = styled.div`
	position: absolute;
	width: 12rem;
	bottom: 1rem;
	right: 0;
`;

const StyledImage2 = styled(Image)`
	position: relative !important;
	height: fit-content;
`;

const Content = styled.div`
	z-index: 2;
	position: absolute;
	margin-top: 4rem;
	height: 70%;
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 3rem;
`;
