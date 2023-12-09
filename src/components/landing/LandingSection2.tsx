'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface EditList {
	title: string;
}

const dummy: EditList[] = [
	{
		title: '12기 회장',
	},
	{
		title: '옹졸한 이기웅',
	},
	{
		title: '하남자 민병록',
	},
	{
		title: '가식왕 양희철',
	},
];

const LandingSection2 = () => {
	return (
		<ImageWrapper>
			<Title>
				<div className="overlay">{'> 최근 편집 목록 <'}</div>
				<StyledImage3 src="/img/list.png" alt="닉네임 박스 이미지" fill priority />
			</Title>
			<Box>
				<Content>
					{dummy.map((result, idx) => (
						<div className="list" key={idx}>
							{result.title}
						</div>
					))}
				</Content>
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

const Title = styled.div`
	position: relative;
	width: 30%;
	min-width: 330px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: max-content;
	margin-left: 3rem;
	margin-bottom: 10rem;
	.overlay {
		z-index: 1;
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
	margin-top: 3.2rem;
	width: 90%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
	.list {
		width: 100%;
		height: fit-content;
		font-size: 25px;
		border-bottom: 1px solid black;
		font-weight: 500;
		font-family: NeoDunggeunmo Pro;
	}
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
