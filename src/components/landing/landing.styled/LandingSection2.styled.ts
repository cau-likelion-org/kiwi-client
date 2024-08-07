import Image from 'next/image';
import styled from 'styled-components';

export const ImageWrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	@media screen and (min-width: 1024px) {
		height: 98vh;
	}
`;

export const Title = styled.div`
	position: relative;
	width: 33%;
	min-width: 310px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: max-content;
	margin-left: 3rem;
	top: 11rem;
	.overlay {
		z-index: 1;
		position: absolute;
		height: 100%;
		width: 80%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
		font-size: 190%;
		font-family: NeoDunggeunmo Pro;
		font-style: normal;
		font-weight: bold;
		line-height: normal;
		letter-spacing: 0.3125rem;
		@media screen and (max-width: 540px) {
			font-size: 120%;
		}
	}
	@media screen and (min-width: 1024px) {
		top: 14rem;
		width: 25%;
	}
	@media screen and (max-width: 540px) {
		min-width: 200px;
		top: 5rem;
	}
`;

export const Box = styled.div`
	position: relative;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: max-content;
	margin-left: 3rem;
	gap: 1rem;
	z-index: 5;
	top: 12rem;
	@media screen and (min-width: 1024px) {
		top: 16rem;
		width: 38%;
		font-size: 1.3rem;
	}
	@media screen and (max-width: 540px) {
		width: 70%;
		top: 6rem;
	}
`;

export const Content = styled.div`
	z-index: 5;
	position: absolute;
	margin-top: 4rem;
	width: 90%;
	height: 90%;
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
		@media screen and (max-width: 540px) {
			font-size: 150%;
			letter-spacing: 0rem;
		}
	}
	@media screen and (min-width: 1024px) {
		margin-top: 5rem;
	}
	@media screen and (max-width: 540px) {
		margin-top: 2.3rem;
	}
`;

export const StyledImage = styled(Image)`
	position: relative !important;
	height: fit-content;
`;

export const StyledImage2 = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

export const StyledImage3 = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

export const ShortCutWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	width: 100%;
	height: 15rem;
	bottom: 9rem;
	@media screen and (min-width: 1024px) {
		width: 98%;
		bottom: 18.5rem;
	}
	@media screen and (max-width: 540px) {
		width: 100%;
		top: 0rem;
	}
`;

export const ShortCuts1 = styled.div`
	width: 17%;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: relative;
	margin-left: 1rem;
	margin-top: 4rem;
	z-index: 3;
	cursor: pointer;
	.overlay {
		z-index: 1;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
		width: 70%;
		font-size: 1.4rem;
		font-family: 'NeoDunggeunmo Pro';
		font-style: normal;
		font-weight: bold;
		line-height: normal;
		letter-spacing: 0.4rem;
		margin-bottom: 7px;
		@media screen and (min-width: 1024px) {
			width: 90%;
			font-size: 1.7rem;
			letter-spacing: 0rem;
		}
		@media screen and (max-width: 540px) {
			width: 70%;
			font-size: 1.19rem;
			letter-spacing: 0rem;
		}
	}
	@media screen and (min-width: 1024px) {
		width: 12%;
		margin-top: 0rem;
		font-size: 1.3rem;
	}
`;

export const ShortCuts2 = styled.div`
	width: 17%;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: relative;
	margin-right: 1.2rem;
	margin-top: 5rem;
	z-index: 3;
	cursor: pointer;
	.overlay {
		z-index: 1;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
		width: 70%;
		font-size: 1.4rem;
		font-family: 'NeoDunggeunmo Pro';
		font-style: normal;
		font-weight: bold;
		line-height: normal;
		letter-spacing: 0.4rem;
		@media screen and (min-width: 1024px) {
			width: 90%;
			font-size: 1.7rem;
			letter-spacing: 0rem;
		}
		@media screen and (max-width: 540px) {
			width: 70%;
			font-size: 1.19rem;
			letter-spacing: 0rem;
		}
	}
	@media screen and (min-width: 1024px) {
		width: 12%;
		margin-top: 0rem;
		font-size: 1.3rem;
	}
`;

export const LionWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	position: relative;
	bottom: 7rem;
	z-index: 3;
	@media screen and (min-width: 1024px) {
		bottom: 16rem;
	}
	@media screen and (max-width: 540px) {
		/* object-fit: cover; */
		width: 100%;
		height: fit-content;
		overflow: hidden;
		margin-top: 5rem;
	}
`;

export const Lions = styled.div`
	display: flex;
	width: fit-content;
	height: 23rem;
	@media screen and (min-width: 1024px) {
		height: 27rem;
	}
`;
