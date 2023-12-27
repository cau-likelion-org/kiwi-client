'use client';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { VscTriangleDown } from 'react-icons/vsc';

const sampleData = [
	{
		user: '떠나요제주도🌴',
		date: '2023.12.01 금요일 2:57',
		change:
			'I like cats. I like <modified_from> dogs and apple fruit pies. </modified_from> <modified_to> kiwis. bye! Hello </modified_to> Mutsa <deleted> is the best </deleted>',
	},
	{
		user: '머싸머싸',
		date: '2023.11.25 토요일 5:57',
		change:
			'<added>사당역 13번 출구 앞</added> 스타벅스에서 아아 마시는 중',
	},

];
const DocHistory = () => {
	const renderOldStr = (change: any) => {
		var oldStr = change.replace(
			/<modified_to>(.*?)<\/modified_to>|<added>(.*?)<\/added>/g,
			function ([match, p1, p2]: any) {
				return p1 ? ' ' : p2 ? ' ' : '';
			},
		);

		oldStr = oldStr.replace(/<deleted>/g, ' ' + "<span class='delete'>");
		oldStr = oldStr.replace(/<\/deleted>/g, '</span>');
		oldStr = oldStr.replace(/<modified_from>/g, ' ' + "<span class='from'>");
		oldStr = oldStr.replace(/<\/modified_from>/g, '</span>');

		return { __html: oldStr };
	};
	const renderNewStr = (change: any) => {
		var newStr = change.replace(
			/<modified_from>(.*?)<\/modified_from>|<deleted>(.*?)<\/deleted>/g,
			function ([match, p1, p2]: any) {
				return p1 ? ' ' : p2 ? ' ' : '';
			},
		);

		newStr = newStr.replace(/<added>/g, ' ' + "<span class='add'>");
		newStr = newStr.replace(/<\/added>/g, '</span>');
		newStr = newStr.replace(/<modified_to>/g, ' ' + "<span class='to'>");
		newStr = newStr.replace(/<\/modified_to>/g, '</span>');

		return { __html: newStr };
	};
	return (
		<Main>
			<div className="heart">
				<StyledImage src="/img/heart4Group.png" alt="문서역사" fill priority />
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
								<div dangerouslySetInnerHTML={renderOldStr(data.change)} />
							</OriginalContent>
							<VscTriangleDown size="4rem" color="rgba(76, 77, 245, 0.8)" />
							<ModifyContent>
								<div dangerouslySetInnerHTML={renderNewStr(data.change)} />
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
	.from {
		background-color: #ff7;
	}
	.delete {
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
	.to {
		background-color: #ff7;
	}
	.add {
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
