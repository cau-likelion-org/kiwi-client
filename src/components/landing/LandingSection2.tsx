'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const LandingSection2 = () => {
	return (
		<ImageWrapper>
			<Box>
				<StyledImage3 src="/img/list.png" alt="닉네임 박스 이미지" fill priority />
				<Content></Content>
				<StyledImage2 src="/img/recent.png" alt="닉네임 박스 이미지" fill priority />
			</Box>
			<LionWrapper>
				<Lions>
					<StyledImage src="/img/landingblue.png" alt="파랑 사자" fill priority />
					<StyledImage src="/img/landinggreen.png" alt="초록 사자" fill priority />
				</Lions>
				<Lions>
					<StyledImage src="/img/landingorange.png" alt="주황 사자" fill priority />
					<StyledImage src="/img/landingred.png" alt="빨강 사자" fill priority />
				</Lions>
			</LionWrapper>
		</ImageWrapper>
	);
};

export default LandingSection2;

const ImageWrapper = styled.div`
	width: 100%;
	height: 98vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	top: 15rem;
`;

const Box = styled.div`
	position: relative;
	width: 44%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: max-content;
	margin-left: 3rem;
	gap: 1rem;
	bottom: 7rem;
	z-index: 1;
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

const StyledImage = styled(Image)`
	position: relative !important;
	height: fit-content;
`;

const StyledImage2 = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

const StyledImage3 = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

const ImageWrapper2 = styled.div`
	width: 25rem;
	height: 15rem;
`;

const ShortCuts1 = styled.div``;

const ShortCuts2 = styled.div`
	position: relative;
	width: 15rem;
	background-color: black;
`;

const LionWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	position: relative;
	bottom: 20rem;
`;

const Lions = styled.div`
	display: flex;
	width: fit-content;
	height: 20rem;
`;
