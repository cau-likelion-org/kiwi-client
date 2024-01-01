'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { DataType } from '@/types/request';
import { useRouter } from 'next/navigation';

const LandingSection2 = ({ data }: { data: DataType[] }) => {
	const router = useRouter();
	function formatDate(update: string) {
		const date = update.split('T')[0];
		const formattedDate = date.split('-').join('.');
		return formattedDate;
	}
	const handleClick = (title: string) => {
		router.push(`/viewer?title=${title}`);
	};

	return (
		<ImageWrapper>
			<Title>
				<div className="overlay">{'> 최근 편집 목록 <'}</div>
				<StyledImage3 src="/img/list.png" alt="닉네임 박스 이미지" fill priority />
			</Title>
			<Box>
				<Content>
					{data.map((result, idx) => (
						<>
							<div className="list" key={idx} onClick={() => handleClick(result.title)}>
								<div>{result.title}</div>
								<div>{formatDate(result.updated_at)}</div>
							</div>
						</>
					))}
				</Content>
				<StyledImage2 src="/img/recent.png" alt="닉네임 박스 이미지" fill priority />
			</Box>
			<ShortCutWrapper>
				<ShortCuts1 onClick={() => handleClick('10기')}>
					<div className="overlay">{'10기 문서 바로가기'}</div>
					<StyledImage src="/img/shortCut1.png" alt="말풍선" fill priority />
				</ShortCuts1>
				<ShortCuts2 onClick={() => handleClick('11기')}>
					<div className="overlay">{'11기 문서 바로가기'}</div>
					<StyledImage src="/img/shortCut2.png" alt="말풍선" fill priority />
				</ShortCuts2>
			</ShortCutWrapper>
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
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	@media screen and (min-width: 1024px) {
		height: 98vh;
	}
`;

const Title = styled.div`
	position: relative;
	width: 33%;
	min-width: 310px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: max-content;
	margin-left: 3rem;
	top: 11rem;
	.overlay {
		z-index: 1;
		position: absolute;
		height: 100%;
		width: 80%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
		font-size: 190%;
		font-family: NeoDunggeunmo Pro;
		font-style: normal;
		font-weight: bold;
		line-height: normal;
		letter-spacing: 0.3125rem;
	}
	@media screen and (min-width: 1024px) {
		top: 14rem;
		width: 25%;
	}
`;

const Box = styled.div`
	position: relative;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: max-content;
	margin-left: 3rem;
	gap: 1rem;
	z-index: 5;
	top: 12rem;
	@media screen and (min-width: 1024px) {
		top: 16rem;
		width: 38%;
		font-size: 1.3rem;
	}
`;

const Content = styled.div`
	z-index: 5;
	position: absolute;
	margin-top: 4rem;
	width: 90%;
	height: 90%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
	.list {
		width: 100%;
		height: fit-content;
		display: flex;
		justify-content: space-between;
		font-size: 170%;
		border-bottom: 1px solid black;
		font-weight: 500;
		font-family: NeoDunggeunmo Pro;
		padding: 5px 0rem;
		cursor: pointer;
	}
	@media screen and (min-width: 1024px) {
		margin-top: 5rem;
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

const ShortCutWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	width: 100%;
	height: 15rem;
	bottom: 7.5rem;
	@media screen and (min-width: 1024px) {
		width: 98%;
		bottom: 18.5rem;
	}
`;

const ShortCuts1 = styled.div`
	width: 17%;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: relative;
	margin-left: 1rem;
	margin-top: 4rem;
	z-index: 3;
	cursor: pointer;
	.overlay {
		z-index: 1;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
		width: 70%;
		font-size: 1.4rem;
		font-family: 'NeoDunggeunmo Pro';
		font-style: normal;
		font-weight: bold;
		line-height: normal;
		letter-spacing: 0.4rem;
		margin-bottom: 7px;
		@media screen and (min-width: 1024px) {
			width: 90%;
			font-size: 1.7rem;
			letter-spacing: 0rem;
		}
	}
	@media screen and (min-width: 1024px) {
		width: 12%;
		margin-top: 0rem;
		font-size: 1.3rem;
	}
`;

const ShortCuts2 = styled.div`
	width: 17%;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: relative;
	margin-right: 1.2rem;
	margin-top: 5rem;
	z-index: 3;
	cursor: pointer;
	.overlay {
		z-index: 1;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
		width: 70%;
		font-size: 1.4rem;
		font-family: 'NeoDunggeunmo Pro';
		font-style: normal;
		font-weight: bold;
		line-height: normal;
		letter-spacing: 0.4rem;
		@media screen and (min-width: 1024px) {
			width: 90%;
			font-size: 1.7rem;
			letter-spacing: 0rem;
		}
	}
	@media screen and (min-width: 1024px) {
		width: 12%;
		margin-top: 0rem;
		font-size: 1.3rem;
	}
`;

const LionWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	position: relative;
	bottom: 7rem;
	z-index: 3;
	@media screen and (min-width: 1024px) {
		bottom: 16rem;
	}
`;

const Lions = styled.div`
	display: flex;
	width: fit-content;
	height: 23rem;
	@media screen and (min-width: 1024px) {
		height: 27rem;
	}
`;
