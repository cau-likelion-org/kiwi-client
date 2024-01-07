'use client';

import { styled } from 'styled-components';
import Image from 'next/image';
import React, { useState } from 'react';
import Editor from './Editor';

const Edit = () => {
	return (
		<>
			<Main>
				<div className="heart">
					<StyledImage src="/img/heart3Group.png" alt="문서역사" fill priority />
				</div>
				<Docs>
					<TopWrapper>
						<StyledImage src="/img/sketchbooktop.png" alt="문서역사" fill priority />
						<TopShadow>
							<div style={{ height: '60%', width: '100%' }}></div>
							<div style={{ height: '60%', width: '100%', backgroundColor: 'black' }}></div>
						</TopShadow>
					</TopWrapper>
					<ContentSection>
						<Editor />
					</ContentSection>
					<div style={{ backgroundColor: 'black', width: '100%', height: '15px', marginLeft: '15px' }} />
				</Docs>
				<div className="lionwrap">
					<StyledImage src="/img/one-right-lionground.png" alt="문서역사 하단" fill priority />
				</div>
			</Main>
		</>
	);
};

export default Edit;

const Main = styled.div`
	height: fit-content;
	padding-top: 3rem;
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
		width: 15%;
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
	width: 84%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	@media screen and (min-width: 1024px) {
		width: 80%;
	}
`;

const TopWrapper = styled.div`
	position: relative;
	top: 35px;
	/* width: calc(100% + 15px); */
	width: 100%;
	margin-right: 1.4rem;
	height: 100px;
	display: flex;
`;

const TopShadow = styled.div`
	width: 15px;
	height: 80%;
	display: flex;
	flex-direction: column;
`;

const ContentSection = styled.div`
	width: 100%;
	min-height: 85vh;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	z-index: 1;
	padding-bottom: 1rem;
	background: white;
	border-right: 15px solid black;
`;
