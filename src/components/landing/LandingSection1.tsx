'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LandingSection1 = () => {
	return (
		<ImageWrapper>
			<Wrapper>
				<Title>
					<div className="motion animate1">
						<MotionWrapper animate={{ rotate: 360, transition: { duration: 1, repeat: Infinity, repeatDelay: 3 } }}>
							<Image src="/img/crylion.png" alt="" width={30} height={30} />
						</MotionWrapper>
						<MotionWrapper
							animate={{ rotate: 360, transition: { duration: 1, delay: 1, repeat: Infinity, repeatDelay: 3 } }}
						>
							<Image src="/img/heart.png" alt="" width={30} height={30} />
						</MotionWrapper>
						<MotionWrapper
							animate={{ rotate: 360, transition: { duration: 1, delay: 2, repeat: Infinity, repeatDelay: 3 } }}
						>
							<Image src="/img/minilion.png" alt="" width={30} height={30} />
						</MotionWrapper>
					</div>
					<StyledImage id="title" src="/img/landingTitle.png" alt={'제목'} fill priority></StyledImage>
				</Title>
				<Game>
					<StyledImage src="/img/landingGame.png" alt={'화면'} fill priority></StyledImage>
				</Game>
			</Wrapper>
		</ImageWrapper>
	);
};

export default LandingSection1;

const ImageWrapper = styled.div`
	width: 100%;
	height: fit-content;
	min-height: 93vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	position: relative;
	width: 90%;
	padding-top: 1%;
	gap: 10%;
	padding-bottom: 1%;
	.motion {
		gap: 1.5rem;
		z-index: 1;
		@media (min-width: 0px) {
			display: flex;
		}
		@media (min-width: 1000px) {
			display: none;
		}
		&.animate1 {
			animation: moveUpDown 1s infinite alternate ease-in-out;
		}
	}
`;

const Title = styled.div`
	width: 25%;
	#title {
		margin-top: 2rem;
	}
`;

const Game = styled.div`
	width: 55%;
	margin-top: 5rem;
	z-index: 3;
	@media screen and (min-width: 1024px) {
		margin-top: 1rem;
		width: 45%;
	}
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

const MotionWrapper = styled(motion.div)`
	position: relative;
	width: 4vw;
	margin-left: 4.5px;
	margin-right: 4.5px;
`;
