import Image from 'next/image';
import styled from 'styled-components';

export const ImageWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow-y: hidden;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;
	gap: 1rem;
	bottom: 5rem;
`;

export const Title = styled.div`
	position: relative;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: max-content;
	margin-left: 3rem;
	z-index: 1;
	@media screen and (min-width: 1290px) {
		width: 30%;
		font-size: 3rem;
	}
	.overlay {
		z-index: 2;
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
		font-weight: 600;
		line-height: normal;
		letter-spacing: 0.3125rem;
		@media screen and (min-width: 1024px) {
			width: 50%;
			font-size: 2.5rem;
		}
	}
	@media screen and (max-width: 540px) {
		width: 60%;
		font-size: 1rem;
		bottom: 5rem;
		margin-bottom: 2rem;
	}
`;

export const Box = styled.div`
	position: relative;
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: max-content;
	margin-left: 3rem;
	gap: 1rem;
	z-index: 2;
	font-size: 2rem;
	font-weight: bold;
	@media screen and (min-width: 1024px) {
		width: 60%;
		font-size: 2.5rem;
	}
	@media screen and (max-width: 540px) {
		width: 94%;
		bottom: 6rem;
		margin-left: 0.5rem;
	}
`;

export const StyledImage = styled(Image)`
	position: relative !important;
	height: fit-content;
`;

export const Lion1 = styled.div`
	position: absolute;
	z-index: 0;
	width: 20%;
	left: 5rem;
	bottom: 7.2rem;
	@media screen and (min-width: 1024px) {
		width: 11%;
		bottom: 7.6rem;
	}
	@media screen and (max-width: 540px) {
		display: none;
	}
`;

export const Lion2 = styled.div`
	position: absolute;
	width: 15%;
	bottom: 15%;
	right: 0;
	z-index: 1;
	@media screen and (min-width: 1024px) {
		bottom: 25%;
		width: 10%;
	}
	@media screen and (max-width: 540px) {
		width: 30%;
		bottom: 20rem;
	}
`;

export const StyledImage2 = styled(Image)`
	position: relative !important;
	height: fit-content;
`;

export const Content = styled.div`
	z-index: 2;
	position: absolute;
	margin-top: 2rem;
	height: 50%;
	width: 95%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	font-family: 'NeoDunggeunmo Pro';
	@media screen and (max-width: 540px) {
		font-size: 1.35rem;
	}
`;

export const TextWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;
	letter-spacing: 0.35rem;
	font-weight: 500;
	@media screen and (min-width: 1024px) {
		letter-spacing: 0.4rem;
		line-height: 115%;
	}
	a {
		color: #4546f2;
	}
`;
