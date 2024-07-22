import Image from 'next/image';
import styled from 'styled-components';

export const Main = styled.div`
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

export const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

export const Docs = styled.div`
	width: 84%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	@media screen and (min-width: 1024px) {
		width: 80%;
	}
`;

export const TopWrapper = styled.div`
	position: relative;
	top: 35px;
	/* width: calc(100% + 15px); */
	width: 100%;
	margin-right: 1.4rem;
	height: 100px;
	display: flex;
`;

export const TopShadow = styled.div`
	width: 15px;
	height: 80%;
	display: flex;
	flex-direction: column;
`;

export const ContentSection = styled.div`
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
