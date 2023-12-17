'use client';

import { styled } from 'styled-components';
import Image from 'next/image';
import React, { useState } from 'react';
import MD from './MD';

const Post = () => {
	return (
		<Main>
			<div className="heart">
				<StyledImage src="/img/heart3group.png" alt="문서역사" fill priority />
			</div>
			<Docs>
				<TopWrapper>
					<StyledImage src="/img/sketchbooktop.png" alt="문서역사" fill priority />
				</TopWrapper>
				<Boder>
					<ContentSection>
						<BtnWrapper>
							<Btn>취소</Btn>
							<Btn>완료</Btn>
						</BtnWrapper>
						<MD />
					</ContentSection>
				</Boder>
				<StyledImage src="/img/sketchbookbottom.png" alt="문서역사" fill priority />
			</Docs>
			<div className="lionwrap">
				<StyledImage src="/img/one-right-lionground.png" alt="문서역사 하단" fill priority />
			</div>
		</Main>
	);
};

export default Post;

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
		margin-right: 65%;
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
	width: 85%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const TopWrapper = styled.div`
	width: 100%;
`;

const Boder = styled.div`
	z-index: 3;
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: start;
	border-right: 0.8rem black solid;
	border-bottom: 0.8rem black solid;
	margin-top: -7.3%;
	background-color: none;
	margin-left: 7.7px;
	@media (min-width: 1600px) {
		margin-top: -7%;
		width: 99%;
	}
`;

const ContentSection = styled.div`
	width: 100%;
	min-height: 80vh;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	z-index: 10;
	padding-bottom: 1rem;
	margin-top: 50px;
	background-color: white;
	@media (max-width: 795px) {
		margin-top: 30px;
	}
	@media (max-width: 494px) {
		margin-top: 1.5rem;
	}
`;

const BtnWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: end;
	padding: 0.5rem;
	margin-right: 2rem;
	gap: 1rem;
`;

const Btn = styled.div`
	border-radius: 1.25rem;
	background: #4c4df5;
	display: flex;
	padding: 1rem 2rem;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	font-family: Pretendard;
	font-size: 1.3rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;
