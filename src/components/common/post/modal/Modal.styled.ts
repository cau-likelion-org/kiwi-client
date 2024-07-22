import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 3;
`;

export const Btn = styled.div`
	border-radius: 1.25rem;
	background: #4c4df5;
	display: flex;
	padding: 1rem 2rem;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	font-family: 'NeoDunggeunmo Pro';
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	cursor: pointer;
`;

export const Title = styled.div`
	font-size: 1.8rem;
	font-weight: bold;
	color: var(--dark-gray, #585858);
`;

export const ModalSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 40rem;
	height: 30rem;
	border-radius: 2.5rem;
	background: #fff;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	padding: 40px 20px;
	margin-top: 3rem;
	position: absolute;
	color: #000;
	text-align: center;
	font-family: 'NeoDunggeunmo Pro';
	font-weight: 500;
`;

export const X = styled.div`
	position: absolute !important;
	align-items: center;
	stroke-width: 0.5px;
	stroke: #000;
	width: 0.5rem;
	height: 1.03125rem;
	top: 1.5rem;
	right: 4rem;
`;

export const Lions = styled.div`
	display: flex;
	width: 5rem;
	position: absolute;
	bottom: 1.5rem;
	left: 1.5rem;
`;

export const StyledImage2 = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;
