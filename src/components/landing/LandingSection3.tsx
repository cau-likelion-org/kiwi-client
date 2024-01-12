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
								<br />
								<a href=" https://wiki.cau-likelion.org/viewer?title=%EC%9C%84%ED%82%A4%20%EC%82%AC%EC%9A%A9%20%EC%84%A4%EB%AA%85%EC%84%9C">
									멋사 위키가 처음이라면?
								</a>
							</TextWrapper>
						</Content>
						<StyledImage src="/img/guideSection.png" alt={'랜딩'} fill priority></StyledImage>
					</Box>
				</Wrapper>
				<Lion1>
					<StyledImage2 src="/img/heartlion.png" alt={'랜딩'} fill priority></StyledImage2>
				</Lion1>
				<Lion2>
					<StyledImage2 src="/img/glasslion.png" alt={'랜딩'} fill priority></StyledImage2>
				</Lion2>
			</ImageWrapper>
		</>
	);
};

export default LandingSection3;

const ImageWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow-y: hidden;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;
	gap: 1rem;
	bottom: 5rem;
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
	@media screen and (min-width: 1290px) {
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
	@media screen and (max-width: 540px) {
		width: 60%;
		font-size: 1rem;
		bottom: 5rem;
		margin-bottom: 2rem;
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
	z-index: 2;
	font-size: 2rem;
	font-weight: bold;
	@media screen and (min-width: 1024px) {
		width: 60%;
		font-size: 2rem;
	}
	@media screen and (max-width: 540px) {
		width: 94%;
		bottom: 6rem;
		margin-left: 0.5rem;
	}
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: fit-content;
`;

const Lion1 = styled.div`
	position: absolute;
	z-index: 0;
	width: 20%;
	left: 5rem;
	bottom: 7.2rem;
	@media screen and (min-width: 1024px) {
		width: 11%;
		bottom: 7.6rem;
	}
	@media screen and (max-width: 540px) {
		display: none;
	}
`;

const Lion2 = styled.div`
	position: absolute;
	width: 15%;
	bottom: 15%;
	right: 0;
	z-index: 1;
	@media screen and (min-width: 1024px) {
		bottom: 25%;
		width: 10%;
	}
	@media screen and (max-width: 540px) {
		width: 30%;
		bottom: 28rem;
	}
`;

const StyledImage2 = styled(Image)`
	position: relative !important;
	height: fit-content;
`;

const Content = styled.div`
	z-index: 2;
	position: absolute;
	margin-top: 2rem;
	height: 50%;
	width: 95%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	font-family: 'NeoDunggeunmo Pro';
	@media screen and (max-width: 540px) {
		font-size: 1.35rem;
	}
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
	a {
		color: #4546f2;
	}
`;
