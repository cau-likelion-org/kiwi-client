'use client';

interface LinkProps {
	title: string;
}

import { getReverseList } from '@/apis/reverse';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BackLink = () => {
	const router = useRouter();
	const params = useSearchParams();
	const docTitle = params.get('title');

	const isClickedLink = ({ title }: LinkProps) => {
		let encodedTitle = encodeURIComponent(title);
		router.push(`/viewer?title=${encodedTitle}`);
	};

	const [reverseLinks, setReverseLinks] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (typeof docTitle === 'string') {
					const backlinkList = await getReverseList(docTitle);
					setReverseLinks(backlinkList.backlinks_created_for);
				}
			} catch (error) {
				alert('🦁문서를 찾을 수 없습니다🦁');
				console.error('Error : ', error);
			}
		};
		fetchData();
	}, [docTitle]);

	return (
		<Main>
			<div className="heart">
				<StyledImage src="/img/heart4Group.png" alt="문서역사" fill priority />
			</div>
			<Viewer>
				<ViewerHeaderSection>
					<StyledImage src="/img/sketchbooktop.png" alt="문서역사" fill priority />

					<HeaderShadow>
						<div style={{ height: '50%', width: '100%' }}></div>
						<div style={{ height: '50%', width: '100%', backgroundColor: 'black' }}></div>
					</HeaderShadow>
				</ViewerHeaderSection>
				<ViewerBody>
					<ContentsHeader>
						<Title>{`{${docTitle}} 문서를 가리키는 문서`}</Title>
					</ContentsHeader>
					<ContentsBody>
						<Content>
							{reverseLinks.map((title, index) => (
								<List key={index}>
									<Text onClick={() => isClickedLink({ title })}>&bull; {title}</Text>{' '}
								</List>
							))}
						</Content>
					</ContentsBody>
				</ViewerBody>
				<div style={{ backgroundColor: 'black', width: '100%', height: '15px', marginLeft: '15px' }} />
			</Viewer>
			<div className="lionwrap">
				<StyledImage src="/img/one-right-lionground.png" alt="문서역사 하단" fill priority />
			</div>
		</Main>
	);
};

export default BackLink;

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
const Viewer = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const ViewerHeaderSection = styled.div`
	position: relative;
	top: 10px;
	width: calc(100% + 15px);
	height: 100px;
	display: flex;
`;
const ViewerBody = styled.div`
	background: white;
	width: 100%;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-right: 15px solid black;
`;
const ContentsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
	margin-top: 20px;
	align-items: center;
`;
const Title = styled.div`
	color: #000;
	text-align: center;
	font-family: NeoDunggeunmo Pro;
	font-size: 30px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
const ContentsBody = styled.div`
	display: flex;
	margin-top: 20px;
	padding-top: 20px;
	border-top: 0.5px solid black;
	width: 90%;
	height: auto;
	flex-direction: column;
	padding-bottom: 100px;
`;
const List = styled.div`
	width: 175px;
	height: 19.313px;
	flex-shrink: 0;
	color: #000;
	font-family: NeoDunggeunmo Pro;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	margin-bottom: 3.75rem;
`;
const ContentTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: #000;
	text-align: center;
	font-family: NeoDunggeunmo Pro;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	border-bottom: 0.5px solid black;
	padding-bottom: 20px;
`;
const Content = styled.div`
	white-space: pre-line;
	color: #000;
	font-family: Pretendard;
	font-size: 15px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
	// width: 75%;
	margin-top: 40px;
`;
const HeaderShadow = styled.div`
	width: 15px;
	height: 100%;
	display: flex;
	flex-direction: column;
`;
const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;
const Text = styled.span`
	width: auto;
	&:hover {
		border-bottom: 1.5px solid #0757f1;
		border-color: #0757f1;
	}
	cursor: pointer;

	color: #0757f1;
	font-family: NeoDunggeunmo Pro;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
