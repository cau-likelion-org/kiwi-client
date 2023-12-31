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
			<RecentSection>
				<Left>
					<LionLeft>
						<ShortCut1>
							<div className="overlay">10기 문서<br/>바로가기</div>
							<StyledImage src="/img/shortCut1.png" alt="말풍선" fill priority />
						</ShortCut1>
						<Lions>
							<StyledImage src="/img/lionblue.png" alt="파랑 사자" fill priority />
							<StyledImage src="/img/liongreen.png" alt="초록 사자" fill priority />
						</Lions>
					</LionLeft>
				</Left>
				<Middle>
				<Title>
				<div className="overlay">{'> 최근 편집 목록 <'}</div>
				<StyledImage src="/img/list.png" alt="닉네임 박스 이미지" fill priority />
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
					<StyledImage src="/img/recent.png" alt="박스 이미지" fill priority />
				</Box>
					</Middle>
			
				<Right>
					<LionRight>
						<ShortCut2>
							<div className="overlay">11기 문서<br/>바로가기</div>
							<StyledImage src="/img/shortCut2.png" alt="말풍선" fill priority />
						</ShortCut2>
						<Lions>
							<StyledImage src="/img/lionorange.png" alt="주황 사자" fill priority />
							<StyledImage src="/img/lionred.png" alt="빨강 사자" fill priority />
						</Lions>
					</LionRight>
				</Right>
			</RecentSection>
		</ImageWrapper>
	);
};

export default LandingSection2;

const ImageWrapper = styled.div`
	width: 100%;
	height: fit-content;
	min-height: 90vh;
	overflow:hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const Title = styled.div`
	position: relative;
	z-index: 4;
	width: 30%;
	min-width: 330px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: max-content;
	margin-bottom: 1rem;
	.overlay {
		z-index: 4;
		position: absolute;
		width: 80%;
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
	width: 40%;
	min-width: 350px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: max-content;
	gap: 1rem;
	z-index: 2;
	@media (max-width: 1000px) {
		width: 60%;
	}
`;

const Content = styled.div`
	z-index: 2;
	position: absolute;
	width: 90%;
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
`;

const StyledImage = styled(Image)`
	position: relative !important;
	/* height: fit-content; */
`;

const ShortCutWrap = styled.div`
	display: flex;
	width: 100%;
`;

const ShortCut1 = styled.div`
	display: flex;
	width: 35%;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: relative;
	z-index: 3;
	margin-left: 25%;
	.overlay {
		z-index: 2;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
		font-size: 1.5rem;
		font-family: 'NeoDunggeunmo Pro';
		font-style: normal;
		font-weight: bold;
		line-height: normal;
		letter-spacing: 0.4rem;
	}
	@media (max-width: 1200px) {
		width: 50%;
	}
`;

const ShortCut2 = styled.div`
	display: flex;
	width: 35%;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: relative;
	z-index: 3;
	margin-right: 20%;
	.overlay {
		z-index: 3;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
		font-size: 1.5rem;
		font-family: 'NeoDunggeunmo Pro';
		font-style: normal;
		font-weight: bold;
		line-height: normal;
		letter-spacing: 0.4rem;
	}	@media (max-width: 1200px) {
		width: 50%;
	}
`;

const RecentSection = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: end;
	justify-content: centers;
`;
const Left = styled.div`
	width: 35%;
	min-width: 230px;
	display: flex;
	position: absolute;
	@media (max-width: 1200px) {
		margin-bottom: -8%;
	}
`;

const Middle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`;
const Right = styled.div`
	width: 35%;
	min-width: 230px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	right:0;
	@media (max-width: 1200px) {
		margin-bottom: -8%;
	}
`;

const Lions = styled.div`
	z-index: 3;
	display: flex;
	width: 90%;
	align-items: end;
	justify-content: end;
`;

const LionLeft = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: end;
	margin-left: -10%;
`;

const LionRight = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: end;
	justify-content: end;
	margin-right: -10%;
`;
