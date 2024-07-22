import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';

export const ImageWrapper = styled.div`
	width: 100%;
	height: fit-content;
	min-height: 93vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	position: relative;
	width: 90%;
	padding-top: 1%;
	gap: 10%;
	padding-bottom: 1%;
	.motion {
		position: relative;
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

export const Title = styled.div`
	width: 27%;
	#title {
		margin-top: 2rem;
	}
	@media screen and (min-width: 1024px) {
		width: 25%;
	}
`;

export const Game = styled.div`
	width: 55%;
	margin-top: 5rem;
	z-index: 3;
	@media screen and (min-width: 1024px) {
		margin-top: 1rem;
		width: 45%;
	}
`;

export const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

export const MotionWrapper = styled(motion.div)`
	position: relative;
	width: 4vw;
	margin-left: 4.5px;
	margin-right: 4.5px;
`;
