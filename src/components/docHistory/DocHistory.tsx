'use client';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { VscTriangleDown } from 'react-icons/vsc';

const sampleData = [
	{
		user: '떠나요제주도🌴',
		date: '2023.12.01 금요일 2:57',
		original:
			'어쩌구저쩌구야호야호김수한무 거북이와 두루미 삼천갑자 동방삭 <delete>치치카포 사리사리센타 워리워리 세브리깡</delete> 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이 ',
		modify:
			'어쩌구저쩌구야호야호김수한무 거북이와 두루미 삼천갑자 동방삭 <modify>칙칙폭폭 킹몰랑 돈워리 새우깡은 역시 매운 새우깡</modify> 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이 ',
	},
	{
		user: 'zㅣ존몰랑',
		date: '2023.11.25 토요일 2:57',
		original:
			'11기의 프론트엔드<delete> 아기사자이자 </delete>테트리스 고수로 활동 중이며, 백은비(디자인)에게 테트리스 3연승의 영광을 가지고 있다. 민트초코와 파인애플피자를 좋아하며 최근에는 로제마라샹궈를 선호한다. 오전 2시인데 삘받아서 열심히 개발하고 잇는중이다 ㅇㅅㅇ.. 최근에 열심히 캐롤을 듣고있다. </br>We wish you a merry Christmas We wish you a <delete>merry Christmas</delete> We wish you a merry Christmas And a happy new year Glad tidings we bring To you and your kin Glad tidings for Christmas And a happy New Year',
		modify:
			'11기의 프론트엔드이자 <modify>12기의 운영진이되어따..</modify> 테트리스 고수로 활동 중이며, 백은비(디자인)에게 테트리스 3연승의 영광을 가지고 있다. 민트초코와 파인애플피자를 좋아하며 최근에는 로제마라샹궈를 선호한다. 오전 2시인데 삘받아서 열심히 개발하고 잇는중이다 ㅇㅅㅇ.. 최근에 열심히 캐롤을 듣고있다. </br>We wish you a merry Christmas We wish you a <modify>메리 크리스마수🎄</modify> We wish you a merry Christmas And a happy new year Glad tidings we bring To you and your kin Glad tidings for Christmas And a happy New Year',
	},
	{
		user: '야생의 라이언',
		date: '2023.09.11 화요일 13:57',
		original:
			'중커톤 <delete>탕후루후루후루후루</delete>는 너무 귀엽고 맛있게 생겻다 다들 많관부 해줘잉~~내 최애 탕후루는 <delete>방울토마토</delete>',
		modify:
			'중커톤 <modify>학교 앞 탕후루</modify>는 너무 귀엽고 맛있게 생겻다 다들 많관부 해줘잉~~내 최애 탕후루는 <modify>통귤!</modify>',
	},
];
const DocHistory = () => {
	const renderContent = (content: any) => {
		// <delete> 태그를 <Span className='delete'>으로 변환
		const deletedContent = content.replace(/<delete>(.*?)<\/delete>/g, (match: any, p1: any) => {
			return `<span className='delete'>${p1}</span>`;
		});

		// <modify> 태그를 <Span className='modify'>으로 변환
		const modifiedContent = deletedContent.replace(/<modify>(.*?)<\/modify>/g, (match: any, p1: any) => {
			return `<span className='modify'>${p1}</span>`;
		});

		return { __html: modifiedContent };
	};
	return (
		<Main>
			<div className="heart">
				<StyledImage src="/img/heart4group.png" alt="문서역사" fill priority />
			</div>
			<Docs>
				<ViewerHeaderSection>
					<StyledImage src="/img/sketchbooktop.png" alt="문서역사" fill priority />
					{/* <img src="/sketchBookHeader.png" alt="sketchbook" style={{width: "calc(100% - 15px)", height: "100px"}}/> */}
					<HeaderShadow>
						<div style={{ height: '50%', width: '100%' }}></div>
						<div style={{ height: '50%', width: '100%', backgroundColor: 'black' }}></div>
					</HeaderShadow>
				</ViewerHeaderSection>
				<ContentSection>
					{sampleData.map((data, index) => (
						<EditInfo key={index}>
							<div className="profile">
								<div className="profile-circle">
									<div className="profile-img">
										<StyledImage src="/img/modallion.png" alt="문서역사" fill priority />
									</div>
								</div>
								<div>{`{${data.user}}`}님이 편집했어요</div>
							</div>
							<div className="date">{data.date}</div>
							<OriginalContent>
								<div dangerouslySetInnerHTML={renderContent(data.original)} />
							</OriginalContent>
							<VscTriangleDown size="4rem" color="rgba(76, 77, 245, 0.8)" />
							<ModifyContent>
								<div dangerouslySetInnerHTML={renderContent(data.modify)} />
							</ModifyContent>
						</EditInfo>
					))}
					<ColorChip>
						<Color>
							<div className="color-circle1" />
							<div className="color-mean">: 추가된 내용</div>
						</Color>
						<Color>
							<div className="color-circle2" />
							<div className="color-mean">: 변경된 내용</div>
						</Color>
						<Color>
							<div className="color-circle3" />
							<div className="color-mean">: 삭제된 내용</div>
						</Color>
					</ColorChip>
				</ContentSection>
				<div style={{ backgroundColor: 'black', width: '100%', height: '15px', marginLeft: '15px' }} />
			</Docs>
			<div className="lionwrap">
				<StyledImage src="/img/one-right-lionground.png" alt="문서역사 하단" fill priority />
			</div>
		</Main>
	);
};

export default DocHistory;

const Main = styled.div`
	height: fit-content;
	padding-top: 10rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-family: NeoDunggeunmo Pro;
	.lionwrap {
		position: relative;
		width: 100%;
		display: flex;
		margin-top: 10rem;
		gap: 3rem;
		bottom: 0;
	}
	.heart {
		margin-right: 70%;
		width: 20%;
		margin-bottom: 1.5rem;
		min-width: 10rem;
		margin-top: 2rem;
	}
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

const Docs = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const ContentSection = styled.div`
	background: white;
	width: 100%;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-right: 15px solid black;
`;

const EditInfo = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 4rem;
	.profile {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 1rem;
		color: #000;
		font-family: NeoDunggeunmo Pro;
		font-size: 1.8rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-top: 5rem;
	}
	.profile-circle {
		width: 2.7rem;
		height: 2.7rem;
		flex-shrink: 0;
		background-color: #d9d9d9;
		border-radius: 50%;
		object-fit: contain;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.profile-img {
		width: 1.7rem;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		background-color: #d9d9d9;
		object-fit: contain;
		overflow: hidden;
	}
	.date {
		width: 100%;
		margin-left: 7.7rem;
		color: #5b5b5b;
		font-family: NeoDunggeunmo Pro;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
`;

const OriginalContent = styled.div`
	width: 100%;
	border-radius: 1rem;
	border: 3px solid #000;
	max-height: 12rem;
	overflow: scroll;
	font-family: Pretendard;
	font-size: 1.5rem;
	margin-top: 1rem;
	div {
		padding: 2rem;
	}
	span {
		background-color: #faa;
	}
`;
const ModifyContent = styled.div`
	width: 100%;
	border-radius: 1rem;
	border: 3px solid #4c4df5;
	background: #fff;
	max-height: 12rem;
	overflow: scroll;
	font-family: Pretendard;
	font-size: 1.5rem;
	div {
		padding: 2rem;
	}
	span {
		background-color: #afa;
	}
`;

const ColorChip = styled.div`
	width: 100%;
	color: #000;
	font-family: Pretendard;
	font-size: 1.8rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 5rem;
`;

const Color = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1.2rem;
	.color-circle1 {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background-color: #afa;
	}
	.color-circle2 {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background-color: #ff7;
	}
	.color-circle3 {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background-color: #faa;
	}
`;

const ViewerHeaderSection = styled.div`
	position: relative;
	top: 10px;
	width: calc(100% + 15px);
	height: 100px;
	display: flex;
`;
const HeaderShadow = styled.div`
	width: 15px;
	height: 100%;
	display: flex;
	flex-direction: column;
`;
