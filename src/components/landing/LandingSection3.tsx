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
						<Content>
							<TextWrapper>
								<div>멋사 중대의 이야기를 저장하고 공유하는 공간으로,</div>
								<div>운영진/아기사자 외에는 문서 작성 및 편집이 불가합니다. </div>
							</TextWrapper>
							<TextWrapper>
								<div>욕설 및 음란성 내용을 포함하거나, </div>
								<div>타인을 비난하는 내용 작성 시 제재당할 수 있습니다.🚨</div>
							</TextWrapper>
						</Content>
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
	height: 100vh;
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
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: max-content;
	margin-left: 3rem;
	z-index: 1;
	@media screen and (min-width: 1024px) {
		width: 30%;
		font-size: 3rem;
	}
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
		font-weight: 600;
		line-height: normal;
		letter-spacing: 0.3125rem;
		@media screen and (min-width: 1024px) {
			width: 50%;
			font-size: 2.5rem;
		}
	}
`;

const Box = styled.div`
	position: relative;
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: max-content;
	margin-left: 3rem;
	gap: 1rem;
	z-index: 1;
	font-size: 2rem;
	@media screen and (min-width: 1024px) {
		width: 60%;
		font-size: 2rem;
	}
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
	height: 60%;
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	font-family: 'NeoDunggeunmo Pro';
	margin-bottom: 1.5rem;
`;

const TextWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;
	letter-spacing: 0.3rem;
	font-weight: 500;
	@media screen and (min-width: 1024px) {
		letter-spacing: 0.4rem;
		line-height: 115%;
	}
`;
