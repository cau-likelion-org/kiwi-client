'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const LandingSection2 = () => {
	return (
		<ImageWrapper>
			<Box>
				<Content></Content>
				<StyledImage2 src="/img/recent.png" alt="닉네임 박스 이미지" fill priority />
			</Box>
			<StyledImage src="/img/landing2.png" alt={'랜딩'} fill priority></StyledImage>
		</ImageWrapper>
	);
};

export default LandingSection2;

const Box = styled.div`
	position: relative;
	width: 38%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: max-content;
`;

const Content = styled.div`
	z-index: 1;
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

const ImageWrapper = styled.div`
	width: 100%;
	position: relative;
`;

const StyledImage2 = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: fit-content;
`;

const ImageWrapper2 = styled.div`
	width: 25rem;
	height: 15rem;
`;

const ShortCuts1 = styled.div`
	background: url('/img/recent.svg');
	background-repeat: no-repeat;
	background-size: cover;
`;

const ShortCuts2 = styled.div`
	position: relative;
	width: 15rem;
	background-color: black;
`;
